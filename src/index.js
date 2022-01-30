import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

function ExchangeRates() {
  const { loading, error, data} = useQuery(EXCHANGE_RATES);

  if (loading) {
    return <p>loading ...</p>
  }
  if (error) {
    return <p>error ...</p>
  }

  return data.rates.map(({currency, rate}) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));

}

export default ExchangeRates;

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
    }
  `
}).then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
