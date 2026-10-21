import React from "react";
import "./who.css";
import PROFILE from "../../assets/brendan-profile.webp";
import { FaLinkedin } from "react-icons/fa";
import HeroBackground from "../../components/home/hero-background/HeroBackground";
import towerImage from "../../assets/citifi-background-3.webp";

const ArrowUpRight = () => (
  <svg
    className="button-icon"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const Who = () => {
  return (
    <div className="who-body">
      <HeroBackground variant="side" image={towerImage} />

      <div className="profile">
        <div className="profile__text">
          <div className="name">
            <h1>Brendan Moffett</h1>
            <a
              href="https://www.linkedin.com/in/brendanmoffett/recent-activity/all/"
              target="_blank"
              className="linkedin"
            >
              <span>LinkedIn</span>
              <ArrowUpRight />
            </a>
          </div>
          <h2>Managing Director</h2>
          <p>
            Brendan is an experienced strategic leader with over 20 years’
            expertise in marketing, communications and partnership development.
            He has a strong track record of shaping strategy, building
            influential partnerships and delivering high-profile projects that
            strengthen brands, drive investment and create opportunities for
            growth.
          </p>
        </div>

        <div className="profile__image">
          <div className="profile__background"></div>
          <img src={PROFILE} alt="brendan profile" />
        </div>
      </div>
    </div>
  );
};

export default Who;
