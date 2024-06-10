import './Hero.scss';
function Hero({ videoDetails }) {
    return (
        <div className="hero">
            <video className="hero__video" poster={videoDetails.image} controls>
                <source />
            </video>
        </div>
    );
     
}

export default Hero;