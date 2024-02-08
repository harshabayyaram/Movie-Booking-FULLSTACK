import React, { useState } from 'react';
import './Contact.css';
import UserMenuBar from '../MenuBar/UserMenuBar';
import Footer from '../Footer/Footer';



const Contact = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);
  const handleInput = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData) {
      alert("Data received");
      window.location.reload();
    }
  }
  return (
    <div>
      <div>
        <UserMenuBar />
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>Have questions, suggestions, or just want to say hello? We'd love to hear from you!</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" onChange={handleInput} />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" onChange={handleInput} />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" placeholder="Type your message here..." onChange={handleInput}></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
