import React, { useEffect } from "react";

import "../../styles/home.css";
import { artistTitleAnimation } from "../../utils/artist_title_animation.js";

const Home = () => {
  useEffect(() => {
    artistTitleAnimation();
  }, []);

  return (
    <div id="container">
      <div id="title-container">
        <h1>
          <span id="title">
            <span className="title-letter">I</span>
            <span className="title-letter">o</span>
            <span className="title-letter">a</span>
            <span className="title-letter">n</span>
            <span className="title-letter">a</span>
            <span className="title-letter">&nbsp;</span>
            <span className="title-letter">I</span>
            <span className="title-letter">r</span>
            <span className="title-letter">i</span>
            <span className="title-letter">m</span>
            <span className="title-letter">i</span>
            <span className="title-letter">a</span>
          </span>
          <br />
          <span id="sub-title">Artist - Painter </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
