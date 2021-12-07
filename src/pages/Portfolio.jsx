import React from "react";
import "./Portfolio.css";
import Header from "../components/Header";
import FolioCard from "../components/FolioCard";

import img_1 from "../images/code_2.jpeg";
import img_2 from "../images/jew1.jpeg";
import img_3 from "../images/jew2.jpeg";
import img_4 from "../images/jew3.jpeg";
import img_5 from "../images/jew4.jpeg";
import img_6 from "../images/jew5.jpeg";
import img_7 from "../images/jew6.jpeg";
import img_8 from "../images/jew8.jpg";

// import img_1 from "../images/code_2.jpeg";

import Footer from "../components/Footer";

function Portfolio() {
  return (
    <div className="portfolio">
      <Header />
      <div className="portfolio__container">
        <img className="portfolio__bg" src={img_1} alt="" />

        <div className="portfolio__text">
          <h2>My Projects</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>

        <div className="portfolio__card__row">
          <div>
            <FolioCard
              title="Splash -- Airpods"
              image={img_8}
              category="Airpods"
            />
          </div>
          <div>
            <FolioCard
              title="Splash -- Airpods"
              image={img_2}
              category="Airpods"
            />
          </div>{" "}
          <div>
            <FolioCard
              title="Splash -- Airpods"
              image={img_3}
              category="Airpods"
            />
          </div>{" "}
          <div>
            <FolioCard
              title="Splash -- Airpods"
              image={img_4}
              category="Airpods"
            />
          </div>
          <div>
            <FolioCard
              title="Splash -- Airpods"
              image={img_5}
              category="Airpods"
            />
          </div>{" "}
          <div>
            <FolioCard
              title="Splash -- Airpods"
              image={img_6}
              category="Airpods"
            />
          </div>{" "}
          <div>
            <FolioCard
              title="Splash -- Airpods"
              image={img_7}
              category="Airpods"
            />
          </div>{" "}
          <div>
            <FolioCard
              title="Splash -- Airpods"
              image={img_1}
              category="Airpods"
            />
          </div>
        </div>
      </div>
      <div className="portfolio__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;

// header
// bg image
// text
// portfolio card
