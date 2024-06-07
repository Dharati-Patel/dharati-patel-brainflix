import views from "../../assets/images/icons/views.svg";
import likes from "../../assets/images/icons/likes.svg"
import "./Main.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="main__container">
                <h1 className="main__container--title">The Future of Artificial Intelligence</h1>
                <div className="main__container--data">
                    <div className="main__container--data-subtitle">
                        <h2 className="main__container--data-subtitle-author">By Aiden Thompson</h2>
                        <h2 className="main__container--data-subtitle-date">8/8/2023</h2>
                    </div>
                    <div className="main__container--viewlike">
                        <div className="main__container--viewlike-view">
                            <img className="main__container--viewlike-view-img" src={views} alt="views image" />
                            <h2 className="main__container--viewlike-view-num">980,544</h2>
                        </div>
                        <div className="main__container--viewlike-like">
                            <img className="main__container--viewlike-like-img1" src={likes} alt="like image" />
                            <h2 className="main__container--viewlike-like-num1">22,479</h2>
                        </div>
                    </div>
                    
                </div>
                <div className="main__container--description">
                    <p className="main__container--description-text">Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.</p>
                </div>
            </div>
        </main>
    );
}

export default Main;