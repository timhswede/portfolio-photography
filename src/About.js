import { useState } from 'react'
import { styled } from '@material-ui/core/styles';
import AppBar from './comps/AppBar';
import AppSidebar from './comps/AppSideBar';
import AboutFlexBox from './comps/AboutFlexBox';

const Img1 = styled('img')({    
  position: 'relative',
  objectFit: 'cover',
  objectPosition: 'center',

  paddingRight: '1em',
  height: '30vw',


});
const Img2 = styled('img')({
  position:'relative',
  objectFit: 'cover',
  objectPosition: 'center',
  paddingLeft: '1em',

  height: '30vw',
  width: '65vw',

});

function About() {
  const [isOpen, SetIsOpen] = useState(false)

  const toggle = () => {
    SetIsOpen(!isOpen)
  }

  const classes = styled();

return (
  <div className="title">
    <AppSidebar isOpen={isOpen} toggle={toggle} />
    <AppBar toggle={toggle} />
    <AboutFlexBox/>
    <br/><br/><br/>
      <Img1 className={classes.img} src={ 'https://web-photography-s3.s3.us-west-1.amazonaws.com/AboutImage1.jpg' } />
      <Img2 className={classes.img} src={ 'https://web-photography-s3.s3.us-west-1.amazonaws.com/AboutImage2.jpg' } />

  </div>
  
);
}

export default About