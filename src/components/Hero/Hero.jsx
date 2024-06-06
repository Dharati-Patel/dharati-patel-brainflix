import './Hero.scss';
function Hero(details) {
    return (
        <div className="hero">
            <video className="hero__video" poster={details[1].image} controls>
                <source />
            </video>
        </div>
    );
     
}

export default Hero;