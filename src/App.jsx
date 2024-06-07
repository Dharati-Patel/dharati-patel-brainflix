import details from './data/video-details.json';
import { useState } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';

function App() {

  return (
    <>
      <NavigationBar />
      <Hero {...details}/>
      <Main />
    </>
  )
}

export default App
