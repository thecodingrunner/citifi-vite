import React, { useEffect, useRef, useState } from "react";
import "./what.css";
import HeroBackground from "../../components/home/hero-background/HeroBackground";
import backgroundImage from "../../assets/citifi-background-1.webp";

import imgStrategy from "../../assets/citifi-background-4.webp";
import imgBrand from "../../assets/citifi-background-2.webp";
import imgPartnerships from "../../assets/citifi-background-5.webp";
import imgLeadership from "../../assets/citifi-background-1.webp";

const SERVICES = [
  {
    id: "strategy",
    n: "01",
    title: "Strategy & Growth",
    desc: "Helping organisations identify opportunities, define their direction and develop clear, commercially focused strategies.",
    tags: [
      "Business strategy",
      "Growth planning",
      "Place strategy",
      "Proposition development",
    ],
    image: imgStrategy,
  },
  {
    id: "brand",
    n: "02",
    title: "Brand & Marketing",
    desc: "Creating compelling brands, narratives and marketing approaches that build profile, influence audiences and drive engagement.",
    tags: [
      "Brand positioning",
      "Marketing strategy",
      "Communications",
      "Destination marketing",
    ],
    image: imgBrand,
  },
  {
    id: "partnerships",
    n: "03",
    title: "Partnerships & Connections",
    desc: "Bringing together organisations, people and opportunities to create mutually beneficial relationships and commercial value.",
    tags: [
      "Strategic partnerships",
      "Sponsorship",
      "Stakeholder engagement",
      "Business development",
    ],
    image: imgPartnerships,
  },
  {
    id: "leadership",
    n: "04",
    title: "Leadership & Mentoring",
    desc: "Supporting business owners, emerging leaders and teams to build confidence, develop capabilities and navigate change.",
    tags: [
      "Executive mentoring",
      "Business coaching",
      "Leadership development",
      "Strategic advice",
    ],
    image: imgLeadership,
  },
];

const ArrowRight = () => (
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
);


const What = () => {
  const [openId, setOpenId] = useState(null);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  const open = SERVICES.find((s) => s.id === openId);

  const handleOpen = (id, event) => {
    const r = event.currentTarget.getBoundingClientRect();
    setOrigin({
      x: `${r.left + r.width / 2}px`,
      y: `${r.top + r.height / 2}px`,
    });
    triggerRef.current = event.currentTarget;
    setOpenId(id);
  };

  const handleClose = () => {
    setOpenId(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!openId) return;
    document.body.classList.add("no-scroll");
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  return (
    <div className="what-body">
      <HeroBackground image={backgroundImage} />

      <main className="what-main">
        <header className="what-title">
          <h1>
            What we <span className="highlight">do</span>
          </h1>
          <p className="what-hint">Select a hexagon to explore</p>
        </header>

        <div className="honeycomb">
          <div className="honeycomb-circle" aria-hidden="true" />

          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`service-hex service-hex--${s.id}`}
              style={{ "--delay": `${0.15 * (i + 1)}s` }}
              onClick={(e) => handleOpen(s.id, e)}
            >
              <span className="service-hex__title">{s.title}</span>
              <span className="service-hex__num">{s.n}</span>
            </button>
          ))}
        </div>
      </main>

      {open && (
        <div className="service-overlay" onClick={handleClose}>
          <div 
          className="service-zoom"
          style={{ "--ox": origin.x, "--oy": origin.y }}
          >
            <div
              className="service-detail-hex"
              style={{ backgroundImage: `url(${open.image})` }}
              aria-hidden="true"
            />

            <div
              className="service-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-title"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="service-card__num">{open.n}</span>
              <h2 id="service-title">{open.title}</h2>
              <p>{open.desc}</p>
              <ul className="service-tags" aria-label="Services">
                {open.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <button
                ref={closeRef}
                type="button"
                className="service-close"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default What;