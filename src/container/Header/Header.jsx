import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
        <SubHeading  title='Chase the doe' />
        <h1 className='app__header-h1'> Key into my fine tune </h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}> This site is only here to prove the dexterities of saminana (Afolayan Oladipupo) as a fullstack web engineer, hand him your next project for some magik ! I am samienana, samienana is me</p>
        <button className='custom__button' type='button'>samienana</button>
    </div>


    <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
