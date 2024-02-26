// 

import React from 'react';
import { Parallax } from 'react-parallax';
import { Card } from 'react-bootstrap';
import astron from '../images/astron.avif';

const ImageTwo = () => (
  <Parallax className='image' bgImage={astron} strength={800}>
    <div className='content'>
      {/* <span className='img-txt'>a trip to space</span> */}
    </div>
    <div className="cards-container">
      <Card style={{ width: '400px'}}>
        <Card.Img variant="top" style={{height:'500px'}} src="https://img.freepik.com/premium-photo/space-ship-floating-moon-3d-illustration_916191-38673.jpg" />
        <Card.Body>
          <Card.Title>View Space</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '400px' }}>
        <Card.Img variant="top" style={{height:'500px'}} src="https://img.freepik.com/premium-photo/astronaut-walking-moon_518816-5586.jpg" />
        <Card.Body>
          <Card.Title>Travel to Space</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '400px'}}>
        <Card.Img variant="top" style={{height:'500px'}} src="https://image.lexica.art/full_jpg/21cd5c65-9cd6-45ad-be49-f5e4995db2e9" />
        <Card.Body>
          <Card.Title>view Earth</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </Parallax>
);

export default ImageTwo;
