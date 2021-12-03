import React from "react";
import Header from "../components/Header";
import "./Home.css";
import ParticlesBg from "particles-bg";
import { Button } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__animation">
        <ParticlesBg
          className="home__animation__particle"
          // height="80vh"
          type="cobweb"
        />
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
        <div className="home__section__image">hello</div>
        <div className="home__section__text">
          <h2>Hello World</h2>
          <p>Once upon a time, there was a boy named manasseh</p>
        </div>
      </div>
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
