import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: "", message: "" });

  // EmailJS Config
  const EMAILJS_SERVICE_ID = "service_ocscp6d";
  const EMAILJS_TEMPLATE_ID = "template_rirl8u8";
  const EMAILJS_PUBLIC_KEY = "dAuFx7WDwOVraGENc";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const showToast = (type, message) => {
    setToast({ visible: true, type, message });
    setTimeout(() => {
      setToast({ visible: false, type: "", message: "" });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const now = new Date();
      const timeString = now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
          time: timeString,
          to_name: "Shrawan Sah",
          reply_to: formData.email,
          submission_date: now.toLocaleDateString("en-IN"),
          submission_time: now.toLocaleTimeString("en-IN", {
            hour12: true,
          }),
        }
      );

      console.log("Email sent successfully:", result);

      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });

      showToast(
        "success",
        "Thank you for your message! I will get back to you soon."
      );
    } catch (error) {
      console.error("Failed to send email:", error);

      showToast(
        "error",
        "Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-dark transition-colors duration-300"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className={`fixed top-24 right-5 z-50 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-center gap-3 ${
              toast.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                : "bg-red-500/10 border-red-500/20 text-red-400"
            }`}
          >
            <div className="text-lg">
              {toast.type === "success" ? (
                <i className="fas fa-check-circle"></i>
              ) : (
                <i className="fas fa-exclamation-circle"></i>
              )}
            </div>
            <div className="font-medium text-light">{toast.message}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-lg uppercase tracking-wider mb-4">
              Contact Me
            </p>

            <div className="section-title mb-6">
              <h2>Get In Touch</h2>
            </div>

            <p className="text-lg text-gray max-w-2xl mx-auto mt-5 font-light">
              Have a project idea, internship opportunity, or collaboration in
              mind? Feel free to connect with me.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 group relative"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-light mb-8 group-hover:text-primary transition-colors">
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-dark-light/50 flex items-center justify-center text-primary border border-gray/20 group-hover:bg-primary/10 transition-colors">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-light mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:shrawansah3067@gmail.com"
                      className="text-gray hover:text-primary transition-colors font-light"
                    >
                      shrawansah3067@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-dark-light/50 flex items-center justify-center text-secondary border border-gray/20 group-hover:bg-secondary/10 transition-colors">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-light mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+918360705978"
                      className="text-gray hover:text-secondary transition-colors font-light"
                    >
                      +91 83607 05978
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-dark-light/50 flex items-center justify-center text-emerald-400 border border-gray/20 group-hover:bg-emerald-500/10 transition-colors">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-light mb-1">
                      Location
                    </h4>
                    <p className="text-gray font-light">
                      Jalandhar, Punjab 144401
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-dark-light/50 flex items-center justify-center text-blue-400 border border-gray/20 group-hover:bg-blue-500/10 transition-colors">
                    <i className="fab fa-linkedin text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-light mb-1">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/shrawansah/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray hover:text-blue-400 transition-colors font-light"
                    >
                      linkedin.com/in/shrawansah
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-dark-light/50 flex items-center justify-center text-gray border border-gray/20 group-hover:bg-gray/10 transition-colors">
                    <i className="fab fa-github text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-light mb-1">
                      GitHub
                    </h4>
                    <a
                      href="https://github.com/shrawan3067"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray hover:text-light transition-colors font-light"
                    >
                      github.com/shrawan3067
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 group relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300"></div>

            <form
              onSubmit={handleSubmit}
              className="relative z-10"
            >
              <h3 className="text-2xl font-bold text-light mb-8 group-hover:text-primary transition-colors">
                Send Message
              </h3>

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-gray/20 text-light placeholder-gray focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-gray/20 text-light placeholder-gray focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-gray/20 text-light placeholder-gray focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Hello Shrawan, I would like to discuss..."
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-gray/20 text-light placeholder-gray focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 disabled:opacity-50 resize-none"
                ></textarea>
                <p className="text-sm text-gray mt-3 font-light">
                  Please provide details about your project or inquiry.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-3"></i>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-3"></i>
                    Send Message
                  </>
                )}
              </button>

              <p className="text-sm text-gray text-center mt-4 font-light">
                * Required fields
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;