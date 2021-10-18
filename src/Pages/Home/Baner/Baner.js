import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstImg from '../../../images/5438645.jpg'
import secondImg from '../../../images/4121599.jpg'
import thirdImg from '../../../images/volodymyr-hryshchenko-e8YFkjN2CzY-unsplash.jpg'

const Baner = () => {
    return (
        <div>
           <Carousel fade>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={firstImg} style={{height:"540px"}}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondImg} style={{height:"540px"}}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdImg} style={{height:"540px"}}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Baner;