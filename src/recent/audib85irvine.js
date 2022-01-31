import { useState } from 'react'
import AppBar from '../comps/AppBar';
import AppSidebar from '../comps/AppSideBar';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    objectFit: 'cover',
    display: 'inline-flex',
    margin: '.5em',
    maxHeight: '350px',
  });
  
function Recent() {
  const [isOpen, SetIsOpen] = useState(false)

  const toggle = () => {
    SetIsOpen(!isOpen)
  }

return (
  <div className="Recent">
    <AppSidebar isOpen={isOpen} toggle={toggle} />
    <AppBar toggle={toggle}/>
    <br/>
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/HomeImage2.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85Irvine-1.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85Irvine-2.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85Irvine-3.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85Irvine-4.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85Irvine-5.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85Irvine-6.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85Irvine-7.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85Irvine-8.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85Irvine-9.jpg" />


  </div>
);
}

export default Recent