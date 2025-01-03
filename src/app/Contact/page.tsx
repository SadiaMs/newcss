import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="about-section" style={{ backgroundImage: 'url(abbu.png)' }}>
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out.
          </p>
          <form className="contact-form">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <p>Email: support@petsdoctor.com</p>
            <p>Phone: +1-234-567-890</p>
            <p>Address: 123 Pet Street, Animal City, USA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
