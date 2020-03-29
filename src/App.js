import React from "react";
import websites from "./projects.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ParallaxBanner } from "react-scroll-parallax";
import { Card, Row, Col } from "react-bootstrap/";
import Avatar from "react-avatar";

let width = window.innerWidth;

class InfoCard extends React.Component {
  render() {
    return this.props.websites.map(function (website) {
      return (
        <a
          href={website.link}
          style={{ textDecoration: "none" }}
          className="cardWrapper"
        >
          <Card border="light" className="card">
            <Card.Img
              className="top"
              variant="top"
              src={require(`${website.img}`)}
            />
            <Card.Body>
              <Card.Title>{website.title}</Card.Title>
              <Card.Text>{website.body}</Card.Text>
            </Card.Body>
          </Card>
        </a>
      );
    });
  }
}

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

function App() {
  let parallaxHeight = width > 770 ? "760px" : "560px";
  
  return (
    <div className="App">
      <ParallaxBanner
        layers={[{
          image: require("./res/landscape.jpg"),
          amount: 0.3,
        }]}
        style={{height: parallaxHeight,}}
      >
        <Name />
      </ParallaxBanner>
      <div className="label">Projects</div>
      <Row className="justify-content-md-center cards">
        <InfoCard websites={websites} />
      </Row>      
      <div className="label">About Me</div>
      {/* <Row className="about">
      <Col xs={5}>
        <p >
      Hi, I'm Grzegorz </p>
      <p >
I'm a second-year student of Computer Science at the faculty of Computer Science, Electronics and Telecommunications at AGH University of Science and Technology in Cracow, Poland.
</p><p >
Now this is going to be a long paragraph of some complete nonsense text and I suggest you not to read it because why would you waste your time reading something that adds nothing to you. Any way its just a suggestion and who am I to stop you from wasting your time. Now this is going to be a long paragraph of some complete nonsense text and I suggest you not to read it because why would you waste your time reading something that adds nothing to you. Any way its just a suggestion and who am I to stop you from wasting your time.
</p><p >
Also, please do care to look at my experience and awards I received over a decade of my very beaufiful career.</p>
      </Col>
      <Col xs={6}></Col>
      </Row> */}
    </div>
  );
}

export default App;
