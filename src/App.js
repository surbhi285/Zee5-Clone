
import './App.css';
import {useState} from 'react';
import Nav from './Navbar/Nav';
import Home from './Main/Home';
import Movies from './Main/Movies';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TvShows from './Main/TvShows';
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
import ZeeExclusive from './Main/ZeeExclusive';
import AllTrailer from './Main/AllTrailer';
import AllDocomentries from './Main/AllDocumentries';
import AllWebSeries from './Main/AllWebSeries';
import AllDrama from './Main/AllDrama';
import NoResult from './Main/NoResult';
import Profile from './Main/Profile';
import Subscription from './Main/Subscription';
import Rental from './Main/Rental';
import Transaction from './Main/Transaction';
import AboutUS from './Main/AboutUS';
import TermOfUse from './Main/TermOfUse';
import { FetchProvider} from './FetchContext';

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[userName, setUserName] = useState("");
  const [Email, setEMail] = useState("");

  const setLoggedInStatus = (status) => {
    setIsLoggedIn(status);
  };



  return (
<>
<FetchProvider>
   <Router>
    <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={userName}/>
   <Routes>
            <Route path="/" element={<Home/>} />
                <Route path="/Movies" element={<Movies />} />
                <Route path="/TvShows" element={<TvShows />} />
                <Route path="/Song" element={<VideoSong />} />
                <Route path="/shortfilm" element={<ShortFilm />} />
                <Route path="/watch/:id" element={<Watch />} />
                <Route path="/Watchlist" element={<Watchlist />} />
                <Route path="/result/:id"   element={<SearchResult />} />
                <Route path='/AllMovies' element={<AllMovies />}/>
                 <Route path="/AllShows" element={<AllShows />} />
                 <Route path="/AllDocumentries" element={<AllDocomentries />} />
                 <Route path="/ZeeExclusive" element={<ZeeExclusive />} />
                 <Route path="/AllTrailer" element={<AllTrailer />} />
                 <Route path="/AllWebSeries" element={<AllWebSeries/>} />
                 <Route path="/AllDrama" element={<AllDrama />} />
                 <Route path="/NoResult" element={<NoResult />} />
                 <Route path="/Profile" element = {<Profile username={userName} email={Email}/>}/>
                 <Route path="/Subscription" element = {<Subscription />}/>
                 <Route path="/Rental" element = {<Rental />}/>
                  <Route path="/transaction" element= {<Transaction />}/>
                  <Route path="/AboutUs" element={<AboutUS />}/>
                  <Route path="/TermOfUse" element={<TermOfUse />}/>
              {/* No need to include Nav for /Login and /Register */}
            
              <Route path="/Login" element={<Login  setLoggedInStatus={setLoggedInStatus} setUserName={setUserName} setEMail={setEMail}/>} />
                <Route path="/Register" element={<Register  setLoggedInStatus={setLoggedInStatus} setUserName={setUserName} setEMail={setEMail}/>} />
                <Route path="/BuyPlan" element={<BuyPlan  />} />
            </Routes>
    </Router>
    </FetchProvider>
    </>
  );
}

export default App;
