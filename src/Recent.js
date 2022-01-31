import { useState } from 'react'
import AppBar from './comps/AppBar';
import AppSidebar from './comps/AppSideBar';

function Recent() {
  const [isOpen, SetIsOpen] = useState(false)

  const toggle = () => {
    SetIsOpen(!isOpen)
  }


return (
  <div className="Recent">
    <AppSidebar isOpen={isOpen} toggle={toggle} />
    <AppBar toggle={toggle} />
    <br/><br/><br/><br/>
    <div class="container"><div class="content"><a href='#'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/DSC03091.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title For This</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='#'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/IMG_2889-Edit-Edit-2.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='#'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/IMG_2424.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='#'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/DSC03091.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='#'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/DSC03462.png"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='recent/audia4modern'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/DSC03091.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3></div></a></div></div>  
                                                                        
  </div>
);
}

export default Recent
