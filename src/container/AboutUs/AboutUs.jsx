import React from 'react';
import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Me</h1>
        <img src={images.spoon} alt="spoon__img" className='spoon__img' />
        <p className='p__opensans'>Like I said earlier, nothing much going on on this site. this all is just to sell samienana (my-humble-self) as a web fullstack</p>
        <button type='button' className='custom__button'> Bookings </button>
      </div>
    

    <div className='app__aboutus-content_knife flex__center'>
      <img src={images.knife} alt="about__knife" />
    </div>

    <div className='app__aboutus-content_history'>
      <h1 className='headtext__cormorant'>My History</h1>
      <img src={images.spoon} alt="spoon__img" className='spoon__img' />
      <p className='p__opensans'>So I decided to make this restuarant feel website to further farmiliarize yourself with experience & skillset as a web fullstack</p>
      <button type='button' className='custom__button'> Bookings </button>
    </div>
  </div>
  </div>
);

export default AboutUs;
