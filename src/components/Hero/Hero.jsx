import './Hero.scss';

const Hero = ({ videoDetails }) => {
    return (
        <div className="hero">
            <video className="hero__video" poster={videoDetails.image} controls>
                <source src={videoDetails.video} type="video/mp4" />
            </video>
        </div>
    );
     
}

export default Hero;