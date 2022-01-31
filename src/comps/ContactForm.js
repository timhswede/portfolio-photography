import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName, lastName, email, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div>
      <div class="contact-details">
        <h1 class="contact-details">Contact</h1>
        <h3 class="contact-details">For general questions or enquires please fill in the contact form or email the address shown below. </h3>
        <h3 class="contact-details">timhuang1317@gmail.com </h3>
      </div> 
      <form class="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName" class="form">First Name *</label>
        <div>
          <input type="text" id="firstName" class="form-input" required />
        </div>
      </div>
      <div>
        <label htmlFor="lastName" class="form">Last Name *</label>
          <div>
            <input type="text" id="lastName" class="form-input" required />
          </div>
      </div>
      <div>
        <label htmlFor="email" class="form">Email *</label>
        <div>
          <input type="email" id="email" class="form-input" required />
        </div>
      </div>
      <div>
        <label htmlFor="message" class="form">Message *</label>
        <div>
          <textarea id="message" class="form-input" required />
        </div>
      </div>
      <button type="submit" class="form-submit">{status}</button>
    </form>
    </div>
    
  );
};

export default ContactForm;