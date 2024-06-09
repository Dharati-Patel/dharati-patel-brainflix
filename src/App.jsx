import details from './data/video-details.json';
//import { useState } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Comments from './components/Comments/Comments';

function App() {
 //console.log(details[1].comments[0].name);

 const videoDetails = details[0];
  return (
    <>
      <NavigationBar />
      <Hero {...details}/>
      <Main />
      <Comments comments={videoDetails.comments}/>

      
    </>
  )
}

export default App
