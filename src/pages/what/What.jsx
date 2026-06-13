import React, { useEffect, useState } from "react";
import "./what.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const What = () => {
  const [hex1active, sethex1active] = useState(false);
  const [hex2active, sethex2active] = useState(false);
  const [hex3active, sethex3active] = useState(false);
  const [hex4active, sethex4active] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(window.screenY);
  }, [window.screenY]);

  function setHex1() {
    console.log(document.documentElement.scrollTop);
    sethex1active((state) => !state);
    setActive((state) => !state);
  }

  function setHex2() {
    sethex2active((state) => !state);
    setActive((state) => !state);
  }

  function setHex3() {
    sethex3active((state) => !state);
    setActive((state) => !state);
  }

  function setHex4() {
    // if (!hex4active) {
    //   window.scrollTo(0,0)
    // }
    console.log(document.body.scrollTop);
    sethex4active((state) => !state);
    setActive((state) => !state);
  }

  return (
    <div className={`what-body no-overflow ${active ? "cutoff" : ""}`}>
      <div className="hexagons">
        <button
          className={`small-hex hex hex1 ${
            hex1active ? " viewHex1 viewHex" : ""
          }`}
          onClick={setHex1}
        >
          Place Branding
        </button>
        <button
          className={`small-hex hex hex2 ${
            hex2active ? " viewHex2 viewHex" : ""
          }`}
          onClick={setHex2}
        >
          Place Plans and <br/> Partnerships
        </button>
        <button
          className={`small-hex hex hex3 ${
            hex3active ? " viewHex3 viewHex" : ""
          }`}
          onClick={setHex3}
        >
          Stakeholder Engagement
        </button>
        <button
          className={`small-hex hex hex4 ${
            hex4active ? " viewHex4 viewHex" : ""
          }`}
          onClick={setHex4}
        >
          Strategic Communications
        </button>
        <div className="large-hex hex"></div>
        <div className="circle"></div>
      </div>

      <div className={`textHex1 textHex ${hex1active ? " textView" : ""}`}>
        <h1>Place Branding</h1>
        <p>
          At Citifi, our approach to place branding goes beyond traditional
          marketing by uncovering and amplifying the authentic character,
          values, culture, and assets that make a place truly unique. We work
          closely with stakeholders to shape a compelling identity that
          resonates with local aspirations and strategic goals. The result is a
          curated, cohesive brand that not only reflects the spirit of the place
          but also strengthens its appeal to investors, visitors, and talent.
        </p>
        <p className="flash">Click to exit</p>
      </div>
      <div className={`textHex2 textHex ${hex2active ? " textView" : ""}`}>
        <h1>Place Plans and Partnerships</h1>
        <p>
          Citifi has played a pivotal role in helping places develop robust
          place plans and place strategies by facilitating the creation of
          strong, collaborative place partnerships. Citifi enables local
          authorities, businesses, and community stakeholders to co-design
          strategies that reflect local identity, needs, and aspirations. By
          fostering shared ownership and aligning diverse interests, Citifi
          helps build consensus around place-based goals, ensuring that plans
          are not only visionary but also actionable and locally supported. This
          partnership-led approach enhances resilience, unlocks investment, and
          drives long-term, inclusive place transformation.
        </p>
        <p className="flash">Click to exit</p>
      </div>
      <div className={`textHex3 textHex ${hex3active ? " textView" : ""}`}>
        <h1>Stakeholder Engagement</h1>
        <p>
          Citifi supports its clients by developing strong stakeholder
          engagement methodologies that build trust, foster collaboration, and
          ensure inclusive decision-making. By combining digital tools with
          place-based insight, Citifi helps clients identify key stakeholder
          groups, map their influence and interests, and design tailored
          engagement strategies that promote meaningful participation. This
          structured approach ensures that a wide range of voices—from residents
          and local businesses to civic leaders and cultural organisations—are
          heard and valued throughout the planning process. As a result, clients
          benefit from greater community buy-in, reduced conflict, and more
          resilient, locally grounded outcomes.
        </p>
        <p className="flash">Click to exit</p>
      </div>
      <div className={`textHex4 textHex ${hex4active ? " textView" : ""}`}>
        <h1>Strategic Communications</h1>
        <p>
          At Citifi, we provide strategic communications advice that goes beyond
          conventional messaging, helping clients articulate a clear, authentic,
          and compelling narrative rooted in the unique identity of their place.
          By aligning communications with local values, culture, and long-term
          goals, we ensure that every message strengthens stakeholder
          relationships and builds broader support. Our approach helps clients
          craft cohesive, targeted communications that not only raise visibility
          but also attract investment, talent, and community engagement.
        </p>
        <p className="flash">Click to exit</p>
      </div>

      {/* <div className='strategy'> */}
      <Link to="/strategy" className="strategy-link">
        How We Work <FaArrowRight />
      </Link>
      {/* </div> */}
    </div>
  );
};

export default What;
