import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import Comments from "../../components/Comments/Comments";
import SideVideoBar from "../../components/SideVideoBar/SideVideoBar";
import { fetchVideoList, fetchVideoDetails } from "../../utils/api-utils";

const Home = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const videos = await fetchVideoList();
        setVideoList(videos);
        if (videos.length > 0) {
          const details = await fetchVideoDetails(videos[0].id);
          setVideoDetails(details);
        }
      } catch (err) {
        setError(err.message);
      }
    };
    loadVideos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  const filterDetails = videoList.filter((detail) => detail.id !== videoDetails.id);

  return (
    <div className="main__container">
      <Hero videoDetails={videoDetails} />
      <div className="main__container--box">
        <div className="main__container--box-first">
          <Main videoDetails={videoDetails} />
          <Comments comments={videoDetails.comments} />
        </div>
        <div className="main__container--box-second">
          <SideVideoBar details={filterDetails} />
        </div>
      </div>
    </div>
  );
};

export default Home;