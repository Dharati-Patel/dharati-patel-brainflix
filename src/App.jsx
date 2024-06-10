import details from './data/video-details.json';
import { useState } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Comments from './components/Comments/Comments';
import SideVideoBar from './components/SideVideoBar/SideVideoBar';

function App() {

  const [videoDetails, setVideoDetails] = useState(details[0]);
  const changevideoDetails = (idPassed) => {
    const foundVideo = details.find((detail) => {
      return detail.id === idPassed;
    });

    setVideoDetails(foundVideo);
  };

  const filterDetails = details.filter((detail) => {
    return detail.id !== videoDetails.id;
  });

  return (
    <div className="main__container"> 
      <NavigationBar />
      <Hero videoDetails={videoDetails}/>
      <div className="main__container--box">
        <div className="main__container--box-first">
          <Main videoDetails={videoDetails}/>
          <Comments comments={videoDetails.comments}/>
        </div>
        <div className="main__container--box-second">
          <SideVideoBar details={filterDetails} changevideoDetails={changevideoDetails}  />
        </div>
      </div>
    </div>
  )
}

export default App;
