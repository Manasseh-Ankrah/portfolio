import { Button, Divider } from "@material-ui/core";
import { Map, Phone } from "@material-ui/icons";
import { ChevronRight, Email } from "@mui/icons-material";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__item__left">
          <h2>Lets talk about</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <Button
            className="footer__about__btn"
            variant="contained"
            size="small"
          >
            About
          </Button>
        </div>
        <div className="footer__container__item__middle">
          <h2>Useful Links</h2>
          <div>
            <p>
              <ChevronRight className="footer__icon margin" /> Home
            </p>
            <p>
              <ChevronRight className="footer__icon margin" /> About
            </p>
            <p>
              <ChevronRight className="footer__icon margin" /> Portfolio
            </p>
            <p>
              <ChevronRight className="footer__icon margin" /> Pages
            </p>
            <p>
              <ChevronRight className="footer__icon margin" /> Blog
            </p>
            <p>
              <ChevronRight className="footer__icon margin" /> Contact
            </p>
          </div>
        </div>
        <div className="footer__container__item__right">
          <h2>Have any Questions?</h2>
          <div className="footer__social__icons">
            <p className="">
              <Map className="footer__icon margin" />
              Kwabenya Accra Ghana
            </p>
            <p>
              <Phone className="footer__icon margin" /> +233245803609
            </p>
            <p>
              <Email className="footer__icon margin" />
              solomonankrah24@gmail.com
            </p>

            {/* <div>
              <Divider />
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          Copyright ©2021 All rights reserved | This Portfolio is made with 💖
          by Manasseh Ankrah
        </p>
      </div>
    </footer>
  );
}

export default Footer;
