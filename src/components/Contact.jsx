import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Contact Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-envelope text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email</h3>
                <a
                  href="mailto:shrawansah3067@gmail.com"
                  className="text-light hover:text-primary transition-colors"
                >
                  shrawansah3067@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-phone text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Phone</h3>
                <p className="text-light">+91 83607 05978</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-map-marker-alt text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Location</h3>
                <p className="text-light">Jalandhar, Punjab 144401</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fab fa-linkedin text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/shrawansah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-primary transition-colors"
                >
                  linkedin/in/shrawansah
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in animation-delay-200">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-6">
                <label htmlFor="name" className="block font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;