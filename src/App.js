import React from 'react';
import land from './res/landscape.jpg';
import websites from './projects.json'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Parallax} from "react-parallax";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Avatar from 'react-avatar';


class InfoCard extends React.Component {
  render() {
    return this.props.websites.map(function (website) {
      return (
        <a href={website.link} style={{ textDecoration: 'none' }} className="cardWrapper">
            <Card border="light" className="card">
                  <Card.Img className="top" variant="top" src={require(`${website.img}`)} />
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


function App() {
  let width = window.innerWidth;
  let avatarSize = width > 770 ? 250 : 150;

  return (
    <div className="App">
      <Parallax bgImage={land} strength={1000}>
        <div className='name'>
          <Avatar className="avatar" githubHandle="wokstym" size={avatarSize} round={true} />
          <div className="insideName">Grzegorz Poręba</div>
          <div className="desc">
            <div >Computer Science Student</div> 
            <div > AGH University of Science and Technology</div>
          </div>
          <div className="logos">
            <a href='https://github.com/Wokstym' >
              <img alt="Github" src={require('./res/social/github2.png')}/>  
            </a>
            <a href='https://www.linkedin.com/in/porebagrzegorz/' >          
              <img alt="LinkedIn" src={require('./res/social/linkedin.svg')}/>
            </a>
            <a  href='mailto:grzegorz.poreba.73@gmail.com' >
              <img alt="mail" src={require('./res/social/mail.png')}/>
            </a>
          </div>
        </div>
      </Parallax>
      <Row className="justify-content-md-center cards">
        <InfoCard websites={websites}/>
      </Row>
    </div>  

  );
}

export default App;