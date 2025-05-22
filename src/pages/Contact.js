import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! \nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // In real-world use: send data to email API or backend
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h2>📞 Contact Me</h2>

      <div className="contact-grid">
        <div className="contact-details">
          <p><strong>📧 Email:</strong> <a href="mailto:gukanshiva39@gmail.com">gukanshiva39@gmail.com</a></p>
          <p><strong>📱 Phone:</strong> 8903905616</p>
          <p><strong>🏠 Address:</strong><br />
            No:306/2, Mallampatti Village,<br />
            Marampatti Post, Uthangari Taluk,<br />
            Krishnagiri, Tamil Nadu – 635207
          </p>
          <p>
            <strong>🔗 LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/gukanamashivayansv" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/gukanamashivayansv
            </a>
          </p>
          <p>
            <strong>🐙 GitHub:</strong>{' '}
            <a href="https://github.com/Gukan2004" target="_blank" rel="noopener noreferrer">
              github.com/Gukan2004
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>💬 Get in Touch</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
