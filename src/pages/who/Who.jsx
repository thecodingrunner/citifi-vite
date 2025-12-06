import React from "react";
import "./who.css";
import PROFILE from "../../assets/brendan-profile.webp";

const Who = () => {
  return (
    <div className="profile">
      <div className="profile__text">
        <h1>Brendan Moffett</h1>
        <h2>Managing Director</h2>
        <p>
          Brendan is a nationally recognised expert in place branding, economic
          narrative development, and public sector strategy. With over 20 years
          of experience at the intersection of marketing, regeneration and
          economic development, Brendan has led high-profile branding and
          investment positioning projects across the UK and internationally.
        </p>
        <p>
          He brings a unique blend of strategic vision, communications acumen,
          and real-world implementation expertise—ensuring that place strategies
          are not only inspiring but deliverable.
        </p>
      </div>
      <div className="profile__image">
        <img src={PROFILE} alt="brendan profile" />
      </div>
    </div>
  );
};

export default Who;
