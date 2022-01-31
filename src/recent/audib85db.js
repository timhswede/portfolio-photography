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
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B8.5DB1.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85DB-1.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85DB-2.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85DB-3.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85DB-4.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85DB-5.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85DB-6.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85DB-7.jpg" />
    <Img src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B85DB-8.jpg" />

  </div>
);
}

export default Recent