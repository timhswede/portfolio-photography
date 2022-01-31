import { useState } from 'react'
import AppBar from './comps/AppBar';
import AppSidebar from './comps/AppSideBar';
import ContactForm from './comps/ContactForm';


function Contact() {
  const [isOpen, SetIsOpen] = useState(false)

  const toggle = () => {
    SetIsOpen(!isOpen)
  }

return (
  
  <div className="Contact">
    <AppSidebar isOpen={isOpen} toggle={toggle} />
    <AppBar toggle={toggle} />
    <br/><br/><br/><br/>

    <ContactForm />  
  </div>
);
}

export default Contact