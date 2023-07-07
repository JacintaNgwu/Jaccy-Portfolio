import React from 'react';

import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';

const Contact = () => (
  <div>
    <Navbar />
    <HeroImg2
      heading="GET IN TOUCH!"
      text="Our contact page is designed to make it easy for you to connect with us.
      Whether you have questions, feedback, or simply want to get in touch, we are here to help. You can reach us through
      email, social media handles, and our contact form.
      We are dedicated to providing excellent customer service and will respond promptly to your inquiries.
      Your satisfaction is important to us, and we look forward to hearing from you and assisting you with your needs."
    />
    <form
      className="form"
      action="https://formspree.io/f/xpznoder"
      method="POST"
    >
      <input
        id="name"
        type="name"
        name="name"
        className="name"
        placeholder="Full name"
        maxLength="30"
        required
      />
      <br />

      <input
        id="email"
        type="email"
        name="email"
        className="email"
        placeholder="Email address"
        required
      />
      <br />

      <textarea
        id="message"
        name="message"
        className="message"
        placeholder="Enter text here"
        maxLength="500"
        required
      />
      <br />
      <p className="error-message" id="invalid" name="errorMessage" />
      <button className="btn" type="submit">Contact Us</button>
    </form>
  </div>
);

export default Contact;
