import details from './data/video-details.json';
//import { useState } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Comments from './components/Comments/Comments';
import SideVideoBar from './components/SideVideoBar/SideVideoBar';

function App() {

 const videoDetails = details[0];
  return (
    <div className="main__container"> 
      <NavigationBar />
      <Hero {...details}/>
      <div className="main__container--box">
        <div className="main__container--box-first">
          <Main />
          <Comments comments={videoDetails.comments}/>
        </div>
        <div className="main__container--box-second">
          <SideVideoBar details={details} />
        </div>
      </div>
    </div>
  )
}

export default App;
