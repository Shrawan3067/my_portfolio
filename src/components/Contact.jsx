import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // EmailJS Config
  const EMAILJS_SERVICE_ID = "service_r0s8gg8";
  const EMAILJS_TEMPLATE_ID = "template_45lmbqc";
  const EMAILJS_PUBLIC_KEY = "FTiA33MRy0dwlX-My";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const showToast = (type, message) => {
    const toast = document.createElement("div");

    toast.className = `
      fixed top-5 right-5 z-50 px-6 py-4 rounded-2xl shadow-2xl
      backdrop-blur-xl border flex items-center gap-3
      animate-slide-in
      ${
        type === "success"
          ? "bg-emerald-500/90 border-emerald-400 text-white"
          : "bg-red-500/90 border-red-400 text-white"
      }
    `;

    toast.innerHTML = `
      <div class="text-lg">
        ${
          type === "success"
            ? '<i class="fas fa-check-circle"></i>'
            : '<i class="fas fa-exclamation-circle"></i>'
        }
      </div>
      <div class="font-medium">${message}</div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("animate-fade-out");

      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 500);
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
      className="
        py-24
        relative
        overflow-hidden
        bg-white
        dark:bg-[#0B1120]
        transition-colors
        duration-300
      "
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-300 font-semibold text-lg uppercase tracking-wider mb-4">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-5">
            Have a project idea, internship opportunity, or collaboration in
            mind? Feel free to connect with me.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div
            className="
              group
              relative
              bg-white
              dark:bg-[#111827]
              rounded-3xl
              p-8
              border
              border-gray-100
              dark:border-gray-800
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-300/40
              dark:hover:border-blue-500/30
              hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
              dark:hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]
            "
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h4>

                    <a
                      href="mailto:shrawansah3067@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                    >
                      shrawansah3067@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-300 border border-purple-100 dark:border-purple-500/20">
                    <i className="fas fa-phone text-xl"></i>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h4>

                    <a
                      href="tel:+918360705978"
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                    >
                      +91 83607 05978
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-500/20">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Location
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400">
                      Jalandhar, Punjab 144401
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-300 border border-sky-100 dark:border-sky-500/20">
                    <i className="fab fa-linkedin text-xl"></i>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      LinkedIn
                    </h4>

                    <a
                      href="https://www.linkedin.com/in/shrawansah/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                    >
                      linkedin.com/in/shrawansah
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                    <i className="fab fa-github text-xl"></i>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      GitHub
                    </h4>

                    <a
                      href="https://github.com/your-github"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      github.com/your-username
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="
              group
              relative
              bg-white
              dark:bg-[#111827]
              rounded-3xl
              p-8
              border
              border-gray-100
              dark:border-gray-800
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-300/40
              dark:hover:border-blue-500/30
              hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
              dark:hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]
            "
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <form
              onSubmit={handleSubmit}
              className="relative z-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send Message
              </h3>

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
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
                    className="form-control"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
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
                    className="form-control"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
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
                  className="form-control"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
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
                  className="form-control resize-none"
                ></textarea>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  Please provide details about your project or inquiry.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  relative
                  overflow-hidden
                  px-6
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  text-white
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-blue-500/30
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                <span className="relative z-10 flex items-center justify-center">
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
                </span>
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                * Required fields
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.35s ease-out;
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
          padding: 0.95rem 1rem;
          border-radius: 1rem;
          border: 1px solid rgb(229 231 235);
          background: white;
          color: rgb(17 24 39);
          transition: all 0.3s ease;
        }

        .dark .form-control {
          background: rgba(17, 24, 39, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
        }

        .form-control:focus {
          outline: none;
          border-color: rgb(59 130 246);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .dark .form-control:focus {
          border-color: rgb(96 165 250);
          box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.15);
        }

        .form-control::placeholder {
          color: rgb(156 163 175);
        }

        .dark .form-control::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Contact;