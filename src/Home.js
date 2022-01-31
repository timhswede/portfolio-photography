import { useState } from 'react'
import AppBar from './comps/AppBar';
import AppSidebar from './comps/AppSideBar';
import ImageSlider from './comps/ImageSlider.jsx';

const AWS = require('aws-sdk');

function Home() {
  const [isOpen, SetIsOpen] = useState(false)

  const toggle = () => {
    SetIsOpen(!isOpen)
  }

return (
  <div className="Home">
    <AppSidebar isOpen={isOpen} toggle={toggle} />
    <AppBar toggle={toggle}/>
    <br/>
    <ImageSlider/>
  </div>
);
}

export default Home