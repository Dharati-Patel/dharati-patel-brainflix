import { Link } from "react-router-dom";
import "./SideVideoBar.scss";

const SideVideoBar = ({ details }) => {
    return (
      <div className="sideVideoBar">
        <h5 className="sideVideoBar__title">NEXT VIDEOS</h5>
        {details.map((video) => (
          <Link key={video.id} to={`/videos/${video.id}`} className="sideVideoBar__container--box">
            <img className="sideVideoBar__container--image" src={video.image} alt={video.title} />
            <div className="sideVideoBar__container--text">
              <h4 className="sideVideoBar__container--text-title">{video.title}</h4>
              <h4 className="sideVideoBar__container--text-channel">{video.channel}</h4>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  
export default SideVideoBar;