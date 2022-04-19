import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById('root')
);
