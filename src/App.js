import React from 'react';
import land from './res/landscape.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {Parallax} from "react-parallax";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Avatar from 'react-avatar';


const websites1 = [{
    link: 'https://wokstym.github.io/IntrToWebAplic/Task1/index.html',
    img: require('./res/gotowaniev1.PNG'),
    title: 'Strona o gotowaniu',
    body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    link: 'https://wokstym.github.io/IntrToWebAplic/Task2/index.html',
    img: require('./res/bootstrapIT.PNG'),
    title: 'Strona IT',
    body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    link: 'https://wokstym.github.io/IntrToWebAplic/Task2/index.html',
    img: require('./res/bootstrapIT.PNG'),
    title: 'Strona IT',
    body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    link: 'https://wokstym.github.io/IntrToWebAplic/Task2/index.html',
    img: require('./res/bootstrapIT.PNG'),
    title: 'Strona IT',
    body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    link: 'https://wokstym.github.io/IntrToWebAplic/Task2/index.html',
    img: require('./res/bootstrapIT.PNG'),
    title: 'Strona IT',
    body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  }
];

const insideStyles = {
  background: "black",
  color: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

class InfoCard extends React.Component {
  render() {
    return  this.props.websites.map(function (website) {
      return (
        <a href={website.link} style={{ textDecoration: 'none' }} className="cardWrapper">
            <Card border="light" className="card">
                  <Card.Img className="top" variant="top" src={website.img} />
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
  return (
    <div className="App">
      <Parallax bgImage={land} strength={1000}>
        <div className='name'>
          <Avatar className="avatar" githubHandle="wokstym" size={250} round={true} />
          <div className="insideName">Grzegorz Poręba</div>
          <div className="desc">
            <div >Computer Science Student</div> 
            <div > AGH University of Science and Technology</div>
          </div>
        </div>
      </Parallax>
      <Row className="justify-content-md-center cards">
        <InfoCard websites={websites1}/>
      </Row>
    </div>  
  );
}

export default App;