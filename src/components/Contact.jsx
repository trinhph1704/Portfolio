import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="icon-location"></i>
              </div>
              <div className="info-details">
                <h3>Location</h3>
                <p>Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="icon-mail"></i>
              </div>
              <div className="info-details">
                <h3>Email</h3>
                <p>phanvanbin232@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="icon-phone"></i>
              </div>
              <div className="info-details">
                <h3>Phone</h3>
                <p>0327377569</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="icon-github"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="icon-linkedin"></i>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="icon-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn ${isSubmitting ? 'submitting' : ''}`} 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="form-status success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-status error">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 