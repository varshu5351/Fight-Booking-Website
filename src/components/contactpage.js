import React from 'react';
import './contactpage.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>

      <div className="contact-content">
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Phone:</strong> +91(444) 123-4567</p>
          <p><strong>Email:</strong> contact@flightbooking.com</p>
          <p><strong>Address:</strong> 123 Flight Avenue, Travel City, TS Hyderabad</p>

          <h2>Our Location</h2>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121808.94128585418!2d78.24237585067753!3d17.43435701215248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e04a83165f%3A0x30e91ce348ff5dbe!2sBlueStone%20Jewellery%20Inorbit%20Mall%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1720162700150!5m2!1sen!2sin" 
              width="300"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;