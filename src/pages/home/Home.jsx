import React from "react";
import "./home.css";
import HeroBackground from "../../components/home/hero-background/HeroBackground";

const Home = () => {
  return (
    <div className="home-body">
      <HeroBackground />

      <main className="home-grid">
        <div className="home-side home-side--left">
          <p className="home-tagline">
            We help businesses, organisations and places{" "}
            <span className="home-spot">realise their potential.</span>
          </p>
        </div>

        <div className="hive">
          <div className="hex-background"></div>
          <div className="hex-image"></div>

          <div className="home-content">
            <div className="title-container">
              <h1>Strategic Consultancy</h1>
            </div>

            <div className="button-container">
              <a href="/what" className="button button-primary">
                What we do
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
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="/experience" className="button button-secondary">
                Our experience
              </a>
            </div>
          </div>
        </div>

        <div className="home-side home-side--right">
          <p>
            Combining strategic insight, creative thinking and valuable
            connections, we support our clients across strategy, branding,
            marketing, partnerships and business development.
          </p>
          <p>
            We also work alongside business owners and leaders through coaching
            and mentoring, helping turn ambitions into action.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
