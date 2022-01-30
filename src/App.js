import './App.css';
import { Routes, Route, Link } from "react-router-dom";
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



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
