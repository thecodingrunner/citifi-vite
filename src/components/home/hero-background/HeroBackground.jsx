import "./herobackground.css";
import backgroundImage from "../../../assets/citifi-background-6.avif";

const HeroBackground = () => {
  return (
    <div className="hero-background" aria-hidden="true">
      <img
        src={backgroundImage}
        alt=""
        className="home-background-image"
        fetchPriority="high"
      />

      <div className="home-background-gradient" />

      <svg viewBox="0 0 1000 866" className="home-background-hex" fill="none">
        <polygon
          points="250,4 750,4 996,433 750,862 250,862 4,433"
          fill="#C3C7CD"
          fillOpacity="0.05"
          stroke="#C3C7CD"
          strokeOpacity="0.16"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default HeroBackground;