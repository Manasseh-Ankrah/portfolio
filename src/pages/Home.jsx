import React from "react";
import Header from "../components/Header";
import "./Home.css";
import ParticlesBg from "particles-bg";
import { Button } from "@material-ui/core";

import img from "../images/team-1.jpg";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__animation">
        <ParticlesBg className="home__animation__particle" type="cobweb" />
      </div>

      <div className="home__text">
        <h2> MANASSEH ANKRAH</h2>
        <p>More than 10 years of creating digital solutions</p>
        <div className="home__btn">
          <Button className="home__btn__port" variant="contained" size="large">
            Portfolio
          </Button>

          <Button
            className="home__btn__contact"
            variant="contained"
            size="large"
          >
            Contact
          </Button>
        </div>
      </div>

      <div className="home__section">
        <div className="home__section__image">
          <img className="home__img" src={img} />
        </div>
        <div className="home__section__text">
          <h2>We create products not just art</h2>
          <p>
            My name is John Smith. I am a web designer and developer.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>

          <Button className="home__btn__about" variant="contained" size="large">
            About
          </Button>
        </div>
      </div>

      {/* dsdfd */}

      {/* <div className="home__section">
        <p style={{ color: "white" }}>Hello world</p>
      </div> */}
    </div>
  );
}

export default Home;

// "color"
// "ball"
// "lines"
// "thick"
// "circle"
// "cobweb"
// "polygon"
// "square"
// "tadpole"
// "fountain"
// "random"
// "custom"
