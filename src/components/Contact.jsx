import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS with your public key
  // Get these from https://www.emailjs.com
  const EMAILJS_SERVICE_ID = 'service_r0s8gg8';
  const EMAILJS_TEMPLATE_ID = 'template_45lmbqc';
  const EMAILJS_PUBLIC_KEY = 'FTiA33MRy0dwlX-My';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Get current time
      const now = new Date();
      const timeString = now.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      // Send email using EmailJS with all required parameters
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
          time: timeString,
          to_name: 'Shrawan Sah', // Your name
          reply_to: formData.email,
          submission_date: now.toLocaleDateString('en-IN'),
          submission_time: now.toLocaleTimeString('en-IN', { hour12: true })
        }
      );

      console.log('Email sent successfully:', result);
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        title: '', 
        message: '' 
      });
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in';
      successMessage.innerHTML = `
        <div class="flex items-center">
          <i class="fas fa-check-circle mr-2"></i>
          <span>Thank you for your message! I will get back to you soon.</span>
        </div>
      `;
      document.body.appendChild(successMessage);
      
      // Remove message after 5 seconds
      setTimeout(() => {
        successMessage.classList.add('animate-fade-out');
        setTimeout(() => {
          if (document.body.contains(successMessage)) {
            document.body.removeChild(successMessage);
          }
        }, 500);
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Show error message
      const errorMessage = document.createElement('div');
      errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in';
      errorMessage.innerHTML = `
        <div class="flex items-center">
          <i class="fas fa-exclamation-circle mr-2"></i>
          <span>Failed to send message. Please try again later.</span>
        </div>
      `;
      document.body.appendChild(errorMessage);
      
      // Remove message after 5 seconds
      setTimeout(() => {
        errorMessage.classList.add('animate-fade-out');
        setTimeout(() => {
          if (document.body.contains(errorMessage)) {
            document.body.removeChild(errorMessage);
          }
        }, 500);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-envelope text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email</h3>
                <a
                  href="mailto:shrawansah3067@gmail.com"
                  className="text-light hover:text-primary transition-colors hover:underline"
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
                <a 
                  href="tel:+918360705978" 
                  className="text-light hover:text-primary transition-colors hover:underline"
                >
                  +91 83607 05978
                </a>
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
                  className="text-light hover:text-primary transition-colors hover:underline"
                >
                  linkedin.com/in/shrawansah
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fab fa-github text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">GitHub</h3>
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-primary transition-colors hover:underline"
                >
                  github.com/your-username
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in animation-delay-200">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="John Doe"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="john@example.com"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="title" className="block font-medium mb-2">
                  Subject / Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Project Inquiry / Job Opportunity"
                  required
                  disabled={loading}
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="form-control"
                  placeholder="Hello Shrawan, I would like to discuss..."
                  required
                  disabled={loading}
                ></textarea>
                <p className="text-sm text-gray mt-2">
                  Please provide details about your project or inquiry
                </p>
              </div>

              <button 
                type="submit" 
                className="btn w-full group relative overflow-hidden"
                disabled={loading}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
              
              <p className="text-sm text-gray text-center mt-4">
                * Required fields
              </p>
            </form>
          </div>
        </div>

        {/* Success/Error messages will be appended here by JavaScript */}
      </div>

      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
        
        .animate-fade-out {
          animation: fadeOut 0.5s ease-out forwards;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        
        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: white;
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
        }
        
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .btn {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Contact;