import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AppBar from './comps/AppBar';
import AppSidebar from './comps/AppSideBar';
import ImageGallery from './comps/ImageGallery';



function Gallery() {
  const [isOpen, SetIsOpen] = useState(false)

  const toggle = () => {
    SetIsOpen(!isOpen)
  }

return (
  <div className="Gallery">
    <AppSidebar isOpen={isOpen} toggle={toggle} />
    <AppBar toggle={toggle} />
    <ImageGallery />
    <br/><br/><br/><br/><br/>
  </div>
);
}

export default Gallery