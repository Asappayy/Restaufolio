import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram }  from'react-icons/fi'
import { FooterOverlay, Newsletter }  from'../../components'
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Me</h1>
        <p className='p__opensans'>Amapiano Avenue, Everywhere .. globally ..</p>
        <p className='p__opensans'>don know! asides software engineering, you can also book samienana as your professional event-host</p>
        <p className='p__opensans'>+234-808-778-9974</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="gericht nla" />
        <p className='p__opensans'>&quot;Samienana Happens To Be A Dexterous Software Engineer Who Is Also A Proficient Event Host! </p>
        <img src={images.spoon} alt="spoonimagery" className='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Active Hours</h1>
        <p className='p__opensans'>Mon-Fri</p>
        <p className='p__opensans'>0:0:00 - 22:00:00</p>
        <p className='p__opensans'>Weekends</p>
        <p className='p__opensans'>0:0:00 - 22:22:22</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>All Rights Reserved Forever. Love, Samienana</p>
    </div>
  </div>
);

export default Footer;
