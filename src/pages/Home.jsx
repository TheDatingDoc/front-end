import React from "react";
import placeholderImage from "../assets/images/homepage-video-placeholder.png";
import "../assets/css/HomePage.css";
import MissionSection from "../components/Mission";
import WhatWeDo from "../components/WhatWeDo";

const Home = () => {
  return (
    <div className="homepage-container">
      <section className="hero">
        <h2>stop swiping</h2>
        <h2>start meeting</h2>
        <img
          src={placeholderImage}
          alt="Video Placeholder"
          className="video-placeholder"
        />
        <p>VIDEO TBD</p>
      </section>

      <div>
        <p>210.000.0000</p>
      </div>
      <ul className="homepage-links">
        <li>
          <a href="/login">LOGIN / SIGN UP</a>
        </li>
        <li>
          <a href="/events">GO ON A DATE</a>
        </li>
        <li>
          <a href="/dating-advice">DATING ADVICE</a>
        </li>
        <li>
          <a href="/events">BUY EVENT TICKET</a>
        </li>
      </ul>
      <MissionSection />
      <WhatWeDo />
    </div>
  );
};

export default Home;
