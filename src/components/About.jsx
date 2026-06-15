import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/Shrawan_Sah_Resume.pdf";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me", icon: "fas fa-user" },
    { id: "details", label: "Details", icon: "fas fa-info-circle" },
    { id: "contact", label: "Contact", icon: "fas fa-address-card" },
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
  };

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-dark transition-colors duration-300"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-lg uppercase tracking-wider mb-4">
              Introduction
            </p>

            <div className="section-title mb-6">
              <h2>About Me</h2>
            </div>

            <p className="text-gray text-lg max-w-2xl mx-auto mt-5 font-light">
              Get to know more about my background, skills, and passion for software development.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-dark-light/50 backdrop-blur-xl rounded-2xl p-2 border border-gray/20 shadow-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "text-gray hover:text-light hover:bg-dark-light"
                }`}
              >
                <i className={tab.icon}></i>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative group">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl scale-105 group-hover:opacity-100 opacity-60 transition-opacity duration-500"></div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl border border-gray/20 shadow-2xl glass-card">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Shrawan Sah"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-5 right-5">
                  <div className="px-5 py-2 rounded-full bg-dark/50 backdrop-blur-md border border-gray/20 text-light text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for Work
                  </div>
                </div>

                {/* Bottom Intro */}
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-light text-4xl font-bold mb-2 tracking-tight">
                    Shrawan Sah
                  </h3>
                  <p className="text-gray text-lg font-light">
                    Full Stack Developer & Software Engineer
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { count: "2+", label: "Months Experience", color: "text-primary" },
                { count: "10+", label: "Projects", color: "text-secondary" },
                { count: "100%", label: "Dedication", color: "text-green-500" }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-5 text-center transition-all hover:-translate-y-1">
                  <div className={`text-3xl font-black mb-1 ${stat.color}`}>
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="space-y-8 h-full">
            <AnimatePresence mode="wait">
              {/* ABOUT TAB */}
              {activeTab === "about" && (
                <motion.div
                  key="about"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="glass-card p-8">
                    <h3 className="text-3xl font-bold text-light mb-5 flex items-center gap-3">
                      <i className="fas fa-code text-primary"></i>
                      Software Engineer
                    </h3>

                    <p className="text-gray leading-relaxed text-lg font-light">
                      I'm a passionate Computer Science student at Lovely Professional University with strong expertise in
                      <span className="text-primary font-medium"> Full Stack Web Development</span> and
                      <span className="text-secondary font-medium"> Java Development</span>. I love building scalable, responsive, and modern applications using cutting-edge technologies and clean coding practices.
                    </p>
                  </div>

                  {/* What I Love */}
                  <div className="glass-card p-8">
                    <h4 className="text-2xl font-bold text-light mb-6 flex items-center gap-3">
                      <i className="fas fa-heart text-red-500"></i>
                      What I Love
                    </h4>

                    <div className="grid grid-cols-2 gap-5">
                      {[
                        { icon: "fas fa-laptop-code", title: "Clean Code" },
                        { icon: "fas fa-mobile-alt", title: "Responsive UI" },
                        { icon: "fas fa-rocket", title: "Performance" },
                        { icon: "fas fa-palette", title: "UI/UX Design" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-dark-light/50 border border-gray/20 transition-colors hover:bg-primary/5 hover:border-primary/20">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg bg-primary/10 text-primary">
                            <i className={item.icon}></i>
                          </div>
                          <span className="font-semibold text-light">
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* DETAILS TAB */}
              {activeTab === "details" && (
                <motion.div
                  key="details"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="glass-card p-8"
                >
                  <h4 className="text-2xl font-bold text-light mb-8">Quick Facts</h4>

                  <div className="space-y-5">
                    {[
                      { label: "Education", value: "Lovely Professional University" },
                      { label: "Degree", value: "B.Tech Computer Science" },
                      { label: "Location", value: "Punjab, India" },
                      { label: "Status", value: "Available for Work" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-4 border-b border-gray/10 last:border-0">
                        <span className="text-gray font-medium">{item.label}</span>
                        <span className="font-semibold text-light text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CONTACT TAB */}
              {activeTab === "contact" && (
                <motion.div
                  key="contact"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="glass-card p-8"
                >
                  <h4 className="text-2xl font-bold text-light mb-8">Get in Touch</h4>

                  <div className="space-y-5">
                    {/* Email */}
                    <a
                      href="mailto:shrawansah3067@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 p-5 rounded-2xl border border-gray/10 hover:border-primary/50 transition-all duration-300 bg-dark-light/30"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <i className="fas fa-envelope text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray mb-1">Email</div>
                        <div className="font-semibold text-light group-hover:text-primary transition-colors">shrawansah3067@gmail.com</div>
                      </div>
                      <i className="fas fa-arrow-right -rotate-45 text-gray opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all"></i>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+918360705978"
                      className="group flex items-center gap-5 p-5 rounded-2xl border border-gray/10 hover:border-primary/50 transition-all duration-300 bg-dark-light/30"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <i className="fas fa-phone text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray mb-1">Phone</div>
                        <div className="font-semibold text-light group-hover:text-primary transition-colors">+91 83607 05978</div>
                      </div>
                      <i className="fas fa-arrow-right -rotate-45 text-gray opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all"></i>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/shrawansah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 p-5 rounded-2xl border border-gray/10 hover:border-primary/50 transition-all duration-300 bg-dark-light/30"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <i className="fab fa-linkedin text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray mb-1">LinkedIn</div>
                        <div className="font-semibold text-light group-hover:text-primary transition-colors">linkedin.com/in/shrawansah</div>
                      </div>
                      <i className="fas fa-arrow-right -rotate-45 text-gray opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all"></i>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Download CV */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4"
            >
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full sm:w-auto"
              >
                <i className="fas fa-download mr-3"></i>
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;