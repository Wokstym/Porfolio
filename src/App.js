import React from "react";
import websites from "./projects.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ParallaxBanner } from "react-scroll-parallax";
import {Row, Col} from "react-bootstrap/";
import Avatar from "react-avatar";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import cv from "./res/GrzegPorResume.pdf";
import Footer from "./Footer/Footer";
import InfoCard from "./InfoCard/InfoCard"

let width = window.innerWidth;

class Name extends React.Component {
  render() {
    let avatarSize = width > 770 ? 250 : 150;

    return (
      <div className="name">
        <Avatar
          className="avatar"
          githubHandle="wokstym"
          size={avatarSize}
          round={true}
        />
        <div className="insideName">Grzegorz Poręba</div>
        <div className="desc">
          <div>Computer Science Student</div>
          <div> AGH University of Science and Technology</div>
        </div>
        <div className="logos">
          <a href="https://github.com/Wokstym">
            <img alt="Github" src={require("./res/social/github2.png")} />
          </a>
          <a href="https://www.linkedin.com/in/porebagrzegorz/">
            <img alt="LinkedIn" src={require("./res/social/linkedin.svg")} />
          </a>
          <a href="mailto:grzegorz.poreba.73@gmail.com">
            <img alt="mail" src={require("./res/social/mail.png")} />
          </a>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    let parallaxHeight = width > 770 ? "760px" : "560px";
    return (
      <div className="App">
        <ParallaxBanner
          layers={[
            {
              image: require("./res/landscape.jpg"),
              amount: 0.3,
            },
          ]}
          style={{ height: parallaxHeight }}
        >
          <Name />
        </ParallaxBanner>
        <div className="label">Projects</div>
        <Row className="justify-content-md-center cards">
          {websites.map(function (website, i) {
            return <InfoCard key={i} website={website} />;
          })}
        </Row>
        <div className="label">About Me</div>
        <Row className="about">
          <Col xs={8}>
            <p>Under construction ;) </p>
            {/* <p>Hi, I'm Grzegorz </p>
            <p>
              I'm a second-year student of Computer Science at the faculty of
              Computer Science, Electronics and Telecommunications at AGH
              University of Science and Technology in Cracow.
            </p>
            <p>
              As a part of my studies and own persssonal projects I've developed confidence working with C++, C, Java and SQL and 
            </p>
            <p>
              I do think there is a lot to learn yet and I am always open for new opportunities to get better
            </p> */}
          </Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-md-center" style={{ margin: "10px" }}>
          <AwesomeButton
            href={cv}
            target="_blank"
            download="Grzegorz_Poreba_Resume.pdf"
          >
            {"Download my CV"}
          </AwesomeButton>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default App;
