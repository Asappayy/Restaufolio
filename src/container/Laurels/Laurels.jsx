import React from 'react';
import { SubHeading } from '../../components';
import { data, images} from '../../constants';
import './Laurels.css';

const AwardCard = ( {awards: {imgUrl, title, subtitle} }) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="awards nla nla" />

    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: '#dcca87'}}>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title="Awards & Int'l Rec" />
      <h1 className='headtext__cormorant'>samienana's cooking laurels</h1>

      <div className='app__laurels_awards'>
        {data.awards.map((award) => <AwardCard awards={award} key={award.title} />)}
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='laurel img' />
    </div>
  </div>
);

export default Laurels;
