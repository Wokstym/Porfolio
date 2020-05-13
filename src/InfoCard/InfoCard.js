import React from "react";
import "./InfoCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, ButtonGroup, Collapse } from "react-bootstrap/";

const resPath = "/course_pres_files/";

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  mouseEnter = (e) => {
    e.target.style.opacity = 1;
    this.setState({ open: true });
  };

  mouseLeave = (e) => {
    e.target.style.opacity = 0.7;
    this.setState({ open: false });
  };

  cardLoad = (e) => {
    e.target.style.opacity = 0.7;
    e.target.style.transition = "0.6s";
  };
  render() {
    const website = this.props.website;

    return (
      <div className="cardWrapper">
        <Card
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onLoad={this.cardLoad}
          border="light"
          className="card"
        >
          <Card.Img variant="top" src={resPath + website.img} />
          <Collapse in={this.state.open}>
            <div>
              <ButtonGroup className="linkButtons" toggle>
                <Button
                  type="checkbox"
                  href={website.repoLink}
                  variant="primary"
                >
                  Code
                </Button>
                {website.demoLink && (
                  <Button
                    type="checkbox"
                    href={website.demoLink}
                    variant="success"
                  >
                    Demo
                  </Button>
                )}
              </ButtonGroup>
            </div>
          </Collapse>
          <Card.Body>
            <Card.Title>{website.title}</Card.Title>
            <Card.Text>{website.body}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default InfoCard;
