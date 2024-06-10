import views from "../../assets/images/icons/views.svg";
import likes from "../../assets/images/icons/likes.svg"
import "./Main.scss";

const Main = ({ videoDetails }) => {
    return (
        <main className="main">
            <div className="main__container">
                <h1 className="main__container--title">{videoDetails.title}</h1>
                <div className="main__container--data">
                    <div className="main__container--data-subtitle">
                        <h2 className="main__container--data-subtitle-author">By {videoDetails.channel}</h2>
                        <h2 className="main__container--data-subtitle-date">{new Date(videoDetails.timestamp).toLocaleDateString()}</h2>
                    </div>
                    <div className="main__container--viewlike">
                        <div className="main__container--viewlike-view">
                            <img className="main__container--viewlike-view-img" src={views} alt="views image" />
                            <h2 className="main__container--viewlike-view-num">{videoDetails.views}</h2>
                        </div>
                        <div className="main__container--viewlike-like">
                            <img className="main__container--viewlike-like-img1" src={likes} alt="like image" />
                            <h2 className="main__container--viewlike-like-num1">{videoDetails.likes}</h2>
                        </div>
                    </div>
                    
                </div>
                <div className="main__container--description">
                    <p className="main__container--description-text">{videoDetails.description}</p>
                </div>
            </div>
        </main>
    );
}

export default Main;