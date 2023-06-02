import { SubHeading} from '../../components';
import {images} from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='contact' />
    <h1 className='headtext__cormorant'style={{marginBottom:'3rem'}}> web.dev.ill </h1>
    <div className='app__wrapper-content'>
      <p className='p__opensans'> Reach Me On Telephone number 234-808-778-9974</p>
      <p className='p__cormorant' style={{margin:'2rem 0', color: '#dcca87'}}>Active 23 hours a day</p>
      <p className='p__opensans'> Five times a week</p>
      <p className='p__opensans'> God Bless You</p>
    </div>
    <button type='button' className='custom__button' style={{marginTop:'2rem'}}>love,samienana</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="we-here" />
    </div>
  </div>
);

export default FindUs;
