import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import { Box } from "@mui/system";
import ParticlesBg from "particles-bg";
import React from "react";
import Header from "../components/Header";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="contact__elements">
        <div className="contact__animation">
          <ParticlesBg className="home__animation__particle" type="circle" />
          <div className="contact__animation__text">
            <h2>Contact Animation</h2>
          </div>
        </div>

        <div className="contact__form">
          <h3>Contact Me </h3>
          <div className="contact__form__first">
            <Box>
              <TextField
                className="contact__form__field one"
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </Box>

            <Box>
              <TextField
                className="contact__form__field two"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Box>
          </div>
          <div>
            <Box>
              <TextField
                className="contact__form__field__sub three"
                id="outlined-basic"
                label="Subject"
                variant="outlined"
              />
            </Box>
          </div>

          <div>
            <Box>
              <TextareaAutosize
                className="contact__form__textarea three"
                id="outlined-basic"
                variant="outlined"
                placeholder="Message"
              />
            </Box>
          </div>

          <Button className="contact__btn" variant="contained" size="large">
            About
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Contact;

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
