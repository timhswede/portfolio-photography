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
    <div class="container"><div class="content"><a href='#/recent/audib85db'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/B8.5DB1.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">Audi B8.5 - DB</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='#/recent/audib85irvine'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/HomeImage2.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">Audi B8.5 - Irvine</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='#/recent/audis4mt'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/HomeImage1.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">Audi S4 - Mountain</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='#/recent/audis4drhs'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/S4DRHS1.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">Audi S4 - DRHS</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='#/recent/audis4irvine'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/S4Irvine1.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">Audi S4 - Irvine</h3></div></a></div></div>
    <div class="container"><div class="content"><a href='#/recent/audia4drhs'><div class="content-overlay"></div>
            <img class="content-image" src="https://web-photography-s3.s3.us-west-1.amazonaws.com/A4DRHS1.jpg"/><div class="content-details fadeIn-bottom">
              <h3 class="content-title">Audi A4</h3></div></a></div></div>  
                                                                        
  </div>
);
}

export default Recent
