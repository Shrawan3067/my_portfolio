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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: "", message: "" });

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = "service_ocscp6d";
  const EMAILJS_TEMPLATE_ID = "template_rirl8u8";
  const EMAILJS_PUBLIC_KEY = "dAuFx7WDwOVraGENc";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("shrawansah3067@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
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
          to_name: "Shrawan Kumar Sah",
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
        "Thank you! Your message has been sent successfully. I will get back to you shortly."
      );
    } catch (error) {
      console.error("Failed to send email:", error);
      showToast(
        "error",
        "Failed to send message. Please reach out directly to shrawansah3067@gmail.com."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-[#f8fafc] dark:bg-[#090d16] transition-colors duration-300"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-24 right-4 sm:right-8 z-50 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-2xl border flex items-center gap-3.5 max-w-md ${
              toast.type === "success"
                ? "bg-emerald-900/90 dark:bg-emerald-950/90 border-emerald-500/40 text-emerald-100 dark:text-emerald-300"
                : "bg-red-900/90 dark:bg-red-950/90 border-red-500/40 text-red-100 dark:text-red-300"
            }`}
          >
            <div className="text-xl shrink-0">
              {toast.type === "success" ? (
                <i className="fas fa-check-circle text-emerald-400"></i>
              ) : (
                <i className="fas fa-exclamation-triangle text-red-400"></i>
              )}
            </div>
            <div className="text-sm font-medium">{toast.message}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[160px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <span className="section-badge">
                <i className="fas fa-paper-plane text-[10px]"></i>
                Let's Connect
              </span>
              <div className="section-title">
                <h2>Get In Touch</h2>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal">
              Interested in full-time opportunities, engineering collaborations, or marketplace discussions? Let's talk.
            </p>
          </motion.div>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left: Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-normal">
                Direct contact details verified from my curriculum vitae.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 text-base">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Direct Email</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href="mailto:shrawansah3067@gmail.com"
                      className="text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 font-semibold text-sm truncate transition-colors"
                    >
                      shrawansah3067@gmail.com
                    </a>
                    <button
                      onClick={copyEmailToClipboard}
                      className="text-xs text-slate-500 hover:text-indigo-600 dark:hover:text-cyan-300 p-1 rounded transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <i className="fas fa-check text-emerald-500"></i>
                      ) : (
                        <i className="fas fa-copy"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 text-base">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Phone & WhatsApp</div>
                  <a
                    href="tel:+918360705978"
                    className="text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 font-semibold text-sm block mt-0.5 transition-colors font-mono"
                  >
                    +91 83607 05978
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 text-base">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Current Location</div>
                  <div className="text-slate-900 dark:text-white font-semibold text-sm mt-0.5">
                    Phagwara, Punjab, India
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Available across Jalandhar / Punjab / Remote</div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] shrink-0 text-base">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">LinkedIn Profile</div>
                  <a
                    href="https://www.linkedin.com/in/shrawansah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 font-semibold text-sm block mt-0.5 transition-colors"
                  >
                    linkedin.com/in/shrawansah
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white shrink-0 text-base">
                  <i className="fab fa-github"></i>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">GitHub Profile</div>
                  <a
                    href="https://github.com/Shrawan3067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 font-semibold text-sm block mt-0.5 transition-colors"
                  >
                    github.com/Shrawan3067
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <a
                href="https://wa.me/918360705978"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-xs py-3 justify-center gap-2"
              >
                <i className="fab fa-whatsapp text-emerald-500 text-sm"></i>
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Send a Message
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-8 font-normal">
              Leave your contact info and inquiry — I'll respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition-colors disabled:opacity-50 shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition-colors disabled:opacity-50 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Engineer Role / Project Collaboration"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition-colors disabled:opacity-50 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Hello Shrawan, we came across your portfolio and would like to discuss..."
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-cyan-400 transition-colors disabled:opacity-50 resize-none shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 justify-center text-sm font-semibold tracking-wide disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin text-sm"></i>
                    <span>Sending Transmission...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane text-sm"></i>
                    <span>Dispatch Message</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>* All fields are required</span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-lock text-[10px]"></i>
                  Encrypted & Directly Delivered
                </span>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;