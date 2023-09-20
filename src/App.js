import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Nav from './Navbar/Nav';
import Home from './Main/Home';
import Movies from './Main/Movies';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import TvShows from './Main/TvShows';
import Documentaries from './Main/Documentries';
import VideoSong from './Main/VideoSong';
import ShortFilm from './Main/ShortFilm';
import Watch from './Main/Watch';
import Login from './Main/Login';
import Register from './Main/Register';
import Watchlist from './Main/Watchlist';
import SearchResult from './Main/SearchResult';
// import BuyPlan from './Main/BuyPlan';

function App() {
  const [showNav, setShowNav] = useState(true);
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  // const[searchData, setSearchData] = useState("");

  const setLoggedInStatus = (status) => {
    setIsLoggedIn(status);
  };

  const handleShown=()=>{
        setShowNav(true);
  }
  const handleNotShown=()=>{
       setShowNav(false);
  }

  return (
<>
   <Router>
    {showNav &&  <Nav isLoggedIn={isLoggedIn} />} 
   <Routes>
            <Route path="/" element={<Home handleShown={handleShown}/>} />
                <Route path="/Movies" element={<Movies handleShown={handleShown}/>} />
                <Route path="/TvShows" element={<TvShows handleShown={handleShown}/>} />
                <Route path="/Documentary" element={<Documentaries handleShown={handleShown}/>} />
                <Route path="/Song" element={<VideoSong handleShown={handleShown}/>} />
                <Route path="/shortfilm" element={<ShortFilm handleShown={handleShown}/>} />
                <Route path="/watch/:id" element={<Watch handleShown={handleShown}/>} />
                <Route path="/Watchlist" element={<Watchlist handleShown={handleShown}/>} />
                <Route path="/result/:id"   element={<SearchResult />} />
              
              {/* No need to include Nav for /Login and /Register */}
            
              <Route path="/Login" element={<Login handleNotShown={handleNotShown} setLoggedInStatus={setLoggedInStatus} />} />
                <Route path="/Register" element={<Register handleNotShown={handleNotShown} />} />
                {/* <Route path="/BuyPlan" element={<BuyPlan handleNotShown={handleNotShown} />} /> */}
            </Routes>
    </Router>
    </>
  );
}

export default App;
