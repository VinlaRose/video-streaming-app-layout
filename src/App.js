
import './others/App.css';
import React, { useContext } from 'react';
import {Routes, Route, NavLink} from "react-router-dom";
import { VideosPage } from './pages/VideosPage';
import { WatchLaterPage } from './pages/WatchLater';
import { LikePage } from './pages/LikePage';
import { Home } from './pages/Home';
import { WatchHere } from './pages/Watchhere';
import { VideoContext } from './context/VideoContext';



function App() {
  const {watchLaterLength} = useContext(VideoContext)
  const {likedLength} = useContext(VideoContext)
  return (
    <div className="App">
      <h1>Video streaming app</h1>

      <nav>
      <NavLink style={{margin: "20px"}} to = "/">Home</NavLink>
      <NavLink style={{margin: "20px"}} to = "/videos">Videos</NavLink>
      <NavLink style={{margin: "20px"}} to = "/watchlater">Watch Later({watchLaterLength})</NavLink>
      <NavLink style={{margin: "20px"}} to = "/liked">Liked Vidoes({likedLength}) </NavLink>
      
     </nav>


      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/watchHere/:videoId" element={<WatchHere />} />
      <Route path="/videos" element={<VideosPage/>}/>
      <Route path="/watchlater" element={<WatchLaterPage/>}/>
      <Route path="/liked" element={<LikePage/>}/>
      
    </Routes>

    </div>
  );
}

export default App;
