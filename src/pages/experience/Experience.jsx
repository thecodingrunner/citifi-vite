import React from "react";
import "./experience.css";

import sheffieldImg from "../../assets/sheffield-bg-img.webp";
import nottinghamImg from "../../assets/nottingham-bg-img.webp";
import northamptonImg from "../../assets/northampton-bg-img.webp";
import salisburyImg from "../../assets/salisbury-bg-img.webp";
import wokingImg from "../../assets/woking-bg-img.webp";

import backgroundImage from "../../assets/citifi-background-4.webp";
import HeroBackground from "../../components/home/hero-background/HeroBackground";

const PROJECTS = [
  { name: "Sheffield",   url: "https://welcometosheffield.co.uk",    img: sheffieldImg },
  { name: "Nottingham",  url: "https://marketingnottingham.uk",      img: nottinghamImg },
  { name: "Northampton", url: "https://wearenorthampton.com",        img: northamptonImg },
  { name: "Salisbury",   url: "https://traditionaloriginal.com",     img: salisburyImg },
  { name: "Woking",      url: "https://www.connecttowoking.co.uk",   img: wokingImg },
];

const Experience = () => {
  return (
    <div className='experience-body'>
      <HeroBackground variant="side" image={backgroundImage} />

      <h1 className="experience-title">
        Our <span className="highlight">experience</span>
      </h1>

      <ul className="exp-strip">
        {PROJECTS.map((p, i) => (
          <li
            key={p.name}
            className="exp-hex"
            style={{ "--delay": `${0.1 + i * 0.12}s`}}
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-hex__link"
            >
              <div className="exp-hex__img">
                <img src={p.img} alt={p.name} />
              </div>
              <span className="exp-hex__name">
                {p.name}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience