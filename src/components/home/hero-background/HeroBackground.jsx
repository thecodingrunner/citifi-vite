import "./herobackground.css";
import backgroundImage from "../../../assets/citifi-background-6.webp";
import defaultImage from "../../../assets/citifi-background-2.webp";

const HeroBackground = ({ variant = "centre", image = defaultImage }) => {
  return (
    <div
      className={`hero-background hero-background--${variant}`}
      aria-hidden="true"
    >
      <img
        src={image}
        alt=""
        className="home-background-image"
      />

      <div className="home-background-gradient" />

      {variant === "centre" && (
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
      )}
    </div>
  );
};

export default HeroBackground;
