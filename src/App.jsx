import details from './data/video-details.json';
import { useState } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <>
      <NavigationBar />
      <Hero {...details}/>
    </>
  )
}

export default App
