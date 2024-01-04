import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/aboutUs/ElleHacks2024-01.jpg';
import img2 from '../assets/aboutUs/ElleHacks2024-02.jpg';
import img3 from '../assets/aboutUs/ElleHacks2024-03.jpg';
import img4 from '../assets/aboutUs/ElleHacks2024-04.jpg';
import img5 from '../assets/aboutUs/ElleHacks2024-05.jpg';
import img6 from '../assets/aboutUs/ElleHacks2024-06.jpg';
import img7 from '../assets/aboutUs/ElleHacks2024-07.jpg';

class AboutUs extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '5vh'}}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <Carousel>
            <Carousel.Item>
              <Image width={500} height={600} alt="First slide" src={img1} />
            </Carousel.Item>
            <Carousel.Item>
              <Image width={500} height={600} alt="First slide" src={img2} />
            </Carousel.Item>
            <Carousel.Item>
              <Image width={500} height={600} alt="First slide" src={img3} />
            </Carousel.Item>
            <Carousel.Item>
              <Image width={500} height={600} alt="First slide" src={img4} />
            </Carousel.Item>
            <Carousel.Item>
              <Image width={500} height={600} alt="First slide" src={img5} />
            </Carousel.Item>
            <Carousel.Item>
              <Image width={500} height={600} alt="First slide" src={img6} />
            </Carousel.Item>
            <Carousel.Item>
              <Image width={500} height={600} alt="First slide" src={img7} />
            </Carousel.Item>
          </Carousel>
        </div>

        <div style={{ color: 'white', padding: '20px', textAlign: 'left', flex: 1, maxWidth: '800px', alignContent: 'center' }}>
          <h1 style={{ textAlign: 'center' }}>About Us</h1>
          <br />
          <h5 style={{ textAlign: 'center' }}>Girls who // CODE write the future</h5>
          <br />
          <p>ElleHacks is one of Canada's largest hackathons for women and gender-diverse students! </p>
          <p>We're a free, student-run, and beginner-friendly competition where attendees pitch technical solutions to global issues, participate in fun workshops,
            and network with recruiters and industry professionals.</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
