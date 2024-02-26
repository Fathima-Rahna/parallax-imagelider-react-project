import { Parallax } from 'react-parallax';
import space from '../images/space.jpg';
import { Card } from 'react-bootstrap';


const ImageOne = () => (
    <Parallax className='image' bgImage={space}  strength={800}>
      <div className='content'>
        <span className='img-txt rounded bg-transparent'>   <img
                        alt=""
                        src="https://thumbs.dreamstime.com/b/print-154237546.jpg"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                    />a trip to space ..... <p style={{fontSize:'24px'}}>ViewSpace is a free, web-based collection of digital interactives and videos highlighting the latest developments in astronomy and Earth science.</p>

                    </span>
        <div className="cards-container shadow">
      <Card  style={{ width: '700px',backgroundColor:'grey'}}>
        <Card.Img  className='rounded-circle' variant="top" style={{height:'500px'}} src="https://th.bing.com/th/id/OIP.Y-J4c4gXFLHuOIZKZKXNaAHaGL?rs=1&pid=ImgDetMain" />
        <Card.Body>
        
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content bulk of the card's content.
          </Card.Text>
          <button className='btn btn-info'> View More</button>
        </Card.Body>
      </Card>
      </div>
      </div>
    
  
  




    </Parallax>
);

export default ImageOne