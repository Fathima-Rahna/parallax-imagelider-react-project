import React from 'react'
 import {Carousel} from 'react-bootstrap';


const SliderImages = () => {
  return (
    <>
      
        
        
        
      
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img  style={{ height: '800px', width: '100%' }} 
          className="d-block w-100"
          src="https://i.ytimg.com/vi/9S33mSRjsww/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <h5 style={{color:'blue',fontSize:'60px'}}>Journey with ViewSpace</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{ height: '800px', width: '100%' }} 
          className="d-block w-100"
          src="https://img00.deviantart.net/5a0b/i/2012/125/7/9/unblemished_purity_by_darink-d4qyjw2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{color:'blue',fontSize:'60px'}}>Above the Earth</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{ height: '800px', width: '100%' }} 
          className="d-block w-100"
          src="https://getwalls.io/media/large/2020/07/supermoon-4k-5k-8k-hd-display-pictures-backgrounds-images-for-whatsapp-mobile-pc-large-1009131394.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{color:'blue',fontSize:'60px'}}>On the Moon</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default SliderImages