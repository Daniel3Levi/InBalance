import TopBar from './components/topbar/TopBar';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Write from './pages/write/Write';
import Single from './pages/single/Single';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Articles from './pages/articles/Articles';
import Videos from './pages/videos/Videos';
import Contact from './pages/contact/Contact';
function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/videos" element={<Videos />} />

        <Route path="/articles" element={<Articles />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/write" element={user ? <Write /> : <Register />} />

        <Route path="/post/:postId" element={<Single />} />

        <Route path="/settings" element={user ? <Settings /> : <Register />} />

        <Route path="/login" element={user ? <Home /> : <Login />} />

        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
