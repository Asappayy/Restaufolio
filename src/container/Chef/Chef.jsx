import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef__img" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='chef of the month' />
      <h1 className='headtext__cormorant'>
        Kevin Luo
      </h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote__image" />
          <p className='p__opensans'>I samienana has painstakingly picked out Kevin Luo as my month's chef. never seen a better asian with african dexterities <br /><br /> lmao! ion even know who kevin is, but i'm sure you got the scope, Bring Me your fullstack web projects. let me cook them like Luo</p>
        </div>
        <p className='p__opensans'>+234-808-778-9974 is samienana's contact, feel free to catch me on whatsapp</p>
      </div>

      <div className='app__chef-sign'>
        <p>kevin luo</p>
        <p className='p__opensans'>month's chef</p>
        <img src={images.sign} alt="signate" />
      </div>
    </div>
  </div>
);

export default Chef;
