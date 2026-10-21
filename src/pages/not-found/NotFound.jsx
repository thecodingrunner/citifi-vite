// pages/not-found/NotFound.jsx
import { Link } from "react-router-dom";
import HeroBackground from "../../components/home/hero-background/HeroBackground";
import "./notfound.css";


const NotFound = () => (
  <div className="not-found">
    <HeroBackground />
    <main className="not-found__main">
      <h1>
        Page not <span className="highlight">found</span>
      </h1>
      <p>The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="not-found__link">Back to home</Link>
    </main>
  </div>
);

export default NotFound;