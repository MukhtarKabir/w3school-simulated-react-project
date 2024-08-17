import Mynavbar from '../navbar/navbar';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/img/illustration4.png'
import slide2 from '../../assets/img/illustration4.png'
import slide3 from '../../assets/img/illustration4.png'

function Slidebar() {
  return (
  <section className="slider container mb-3">
　　　        <Carousel>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src= {slide1}
　　　          alt="First slide"
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src={slide2}
　　　          alt="Second slide"
　　　        />
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src={slide3}
　　　          alt="Third slide"
　　　        />
　　　      </Carousel.Item>
　　　    </Carousel>
  </section>
  )}


export default Slidebar