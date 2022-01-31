import { useState, useEffect } from 'react'
import { styled, makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import AppBar from './comps/AppBar';
import AppSidebar from './comps/AppSideBar';
import AboutFlexBox from './comps/AboutFlexBox';

const Img1 = styled('img')({    
  position: 'relative',

  objectFit: 'cover',
  objectPosition: 'center',
  paddingLeft: '4em',
  paddingRight: '1em',
  height: '35vw',
  width: '31vw'

});
const Img2 = styled('img')({
  position:'relative',

  objectFit: 'cover',
  objectPosition: 'center',
  paddingLeft: '1em',
  marginRight: '4em',
  height: '35vw',
  width: '58vw'

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
      <Img1 className={classes.img} src={ 'https://web-photography-s3.s3.us-west-1.amazonaws.com/IMG_1634.jpg' } />
      <Img2 className={classes.img} src={ 'https://web-photography-s3.s3.us-west-1.amazonaws.com/DSC06287-Pano.jpg' } />

  </div>
  
);
}

export default About