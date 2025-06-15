import heroImage from '../assets/hero.jpeg';
const HeroBanner = () => {
    return (
        <div
            className="hero-banner d-flex align-items-center justify-content-center text-center text-white"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "83% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "100vh",
                position: "relative",
            }}
        >
            <div className="overlay"></div>
            <div className="hero-content">
                <h1 className="display-3 fw-bold">Welcome to TravelMate UK 🇬🇧</h1>
                <h5 className="travel-slogan">Your smart assistant to book, discover, and travel safely</h5>
            </div>
        </div>
    );
};

export default HeroBanner;
