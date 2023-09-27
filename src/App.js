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
import BuyPlan from './Main/BuyPlan';
import AllMovies from './Main/AllMovies';
import AllShows from './Main/AllShows';
import AllDocumentries from './Main/AllDocumentries';
import ZeeExclusive from './Main/ZeeExclusive';
import AllTrailer from './Main/AllTrailer';
import AllWebSeries from './Main/AllWebSeries';
import AllDrama from './Main/AllDrama';

function App() {
  const [showNav, setShowNav] = useState(true);
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[userName, setUserName] = useState("");

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
    {showNav &&  <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={userName}/>} 
   <Routes>
            <Route path="/" element={<Home handleShown={handleShown}/>} />
                <Route path="/Movies" element={<Movies handleShown={handleShown}/>} />
                <Route path="/TvShows" element={<TvShows handleShown={handleShown}/>} />
                <Route path="/Documentary" element={<Documentaries handleShown={handleShown}/>} />
                <Route path="/Song" element={<VideoSong handleShown={handleShown}/>} />
                <Route path="/shortfilm" element={<ShortFilm handleShown={handleShown}/>} />
                <Route path="/watch/:id" element={<Watch handleShown={handleShown}/>} />
                <Route path="/Watchlist" element={<Watchlist handleShown={handleShown}/>} />
                <Route path="/result/:id"   element={<SearchResult handleShown={handleShown}/>} />
                <Route path='/AllMovies' element={<AllMovies handleShown={handleShown}/>}/>
                 <Route path="/AllShows" element={<AllShows handleShown={handleShown}/>} />
                 <Route path="/AllDocumentries" element={<AllDocumentries handleShown={handleShown}/>} />
                 <Route path="/ZeeExclusive" element={<ZeeExclusive handleShown={handleShown}/>} />
                 <Route path="/AllTrailer" element={<AllTrailer handleShown={handleShown}/>} />
                 <Route path="/AllWebSeries" element={<AllWebSeries handleShown={handleShown}/>} />
                 <Route path="/AllDrama" element={<AllDrama handleShown={handleShown}/>} />
              {/* No need to include Nav for /Login and /Register */}
            
              <Route path="/Login" element={<Login handleNotShown={handleNotShown} setLoggedInStatus={setLoggedInStatus} setUserName={setUserName}/>} />
                <Route path="/Register" element={<Register handleNotShown={handleNotShown} setLoggedInStatus={setLoggedInStatus} setUserName={setUserName}/>} />
                <Route path="/BuyPlan" element={<BuyPlan handleNotShown={handleNotShown} />} />
            </Routes>
    </Router>
    </>
  );
}

export default App;
