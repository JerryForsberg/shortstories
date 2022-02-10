import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Bookmarks from './pages/bookmarks';
import CreatePost from './pages/createPost';
import Dashboard from './pages/dashboard';
import Feed from './pages/feed';
import Home from './pages/home';
import MyProfile from './pages/myProfile';
import Post from './pages/post';
import Posts from './pages/posts';
import SignIn from './pages/signIn'
import SignUp from './pages/signUp';
import theme from './themes/theme';



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="post" element={<Post />} />
          <Route path="posts" element={<Posts />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="feed" element={<Feed />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="bookmarks" element={<Bookmarks />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
