import React, { useState } from "react";
import resume from "../assets/Shrawan_Sah_Resume.pdf";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me", icon: "fas fa-user" },
    { id: "details", label: "Details", icon: "fas fa-info-circle" },
    { id: "contact", label: "Contact", icon: "fas fa-address-card" },
  ];

  return (
    <section
      id="about"
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
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-300 font-semibold text-lg uppercase tracking-wider mb-4">
            Introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-5">
            Get to know more about my background, skills, and passion for
            software development.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div
            className="
              inline-flex
              bg-white/80
              dark:bg-[#111827]/80
              backdrop-blur-xl
              rounded-2xl
              p-2
              border
              border-gray-200
              dark:border-gray-800
              shadow-lg
            "
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                  ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                `}
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
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative group">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl scale-105"></div>

              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200
                  dark:border-gray-700
                  shadow-2xl
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Shrawan Sah"
                  className="
                    w-full
                    h-[500px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-5 right-5">
                  <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-semibold">
                    <i className="fas fa-check-circle mr-2 text-green-400"></i>
                    Available for Work
                  </div>
                </div>

                {/* Bottom Intro */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-3xl font-bold mb-2">
                    Shrawan Sah
                  </h3>

                  <p className="text-gray-200 text-lg">
                    Full Stack Developer & Software Engineer
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div
                className="
                  bg-white
                  dark:bg-[#111827]
                  rounded-2xl
                  p-5
                  border
                  border-gray-100
                  dark:border-gray-800
                  text-center
                  shadow-lg
                "
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-1">
                  2+
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Months Experience
                </div>
              </div>

              <div
                className="
                  bg-white
                  dark:bg-[#111827]
                  rounded-2xl
                  p-5
                  border
                  border-gray-100
                  dark:border-gray-800
                  text-center
                  shadow-lg
                "
              >
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-1">
                  10+
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Projects
                </div>
              </div>

              <div
                className="
                  bg-white
                  dark:bg-[#111827]
                  rounded-2xl
                  p-5
                  border
                  border-gray-100
                  dark:border-gray-800
                  text-center
                  shadow-lg
                "
              >
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-300 mb-1">
                  100%
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Dedication
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            {/* ABOUT TAB */}
            {activeTab === "about" && (
              <div className="space-y-6">
                <div
                  className="
                    bg-white
                    dark:bg-[#111827]
                    rounded-3xl
                    p-8
                    border
                    border-gray-100
                    dark:border-gray-800
                    shadow-xl
                  "
                >
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
                    <i className="fas fa-code text-blue-600 dark:text-blue-300"></i>

                    Software Engineer
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    I'm a passionate Computer Science student at Lovely
                    Professional University with strong expertise in
                    <span className="text-blue-600 dark:text-blue-300 font-semibold">
                      {" "}
                      Full Stack Web Development
                    </span>{" "}
                    and
                    <span className="text-purple-600 dark:text-purple-300 font-semibold">
                      {" "}
                      Java Development
                    </span>
                    . I love building scalable, responsive, and modern
                    applications using cutting-edge technologies and clean coding
                    practices.
                  </p>
                </div>

                {/* What I Love */}
                <div
                  className="
                    bg-white
                    dark:bg-[#111827]
                    rounded-3xl
                    p-8
                    border
                    border-gray-100
                    dark:border-gray-800
                    shadow-xl
                  "
                >
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <i className="fas fa-heart text-red-500"></i>

                    What I Love
                  </h4>

                  <div className="grid grid-cols-2 gap-5">
                    {[
                      {
                        icon: "fas fa-laptop-code",
                        title: "Clean Code",
                        color:
                          "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300",
                      },
                      {
                        icon: "fas fa-mobile-alt",
                        title: "Responsive UI",
                        color:
                          "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300",
                      },
                      {
                        icon: "fas fa-rocket",
                        title: "Performance",
                        color:
                          "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
                      },
                      {
                        icon: "fas fa-palette",
                        title: "UI/UX Design",
                        color:
                          "bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-300",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          gap-4
                          p-4
                          rounded-2xl
                          bg-gray-50
                          dark:bg-[#1F2937]
                          border
                          border-gray-100
                          dark:border-gray-700
                        "
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${item.color}`}
                        >
                          <i className={item.icon}></i>
                        </div>

                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DETAILS TAB */}
            {activeTab === "details" && (
              <div
                className="
                  bg-white
                  dark:bg-[#111827]
                  rounded-3xl
                  p-8
                  border
                  border-gray-100
                  dark:border-gray-800
                  shadow-xl
                "
              >
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Quick Facts
                </h4>

                <div className="space-y-5">
                  {[
                    {
                      label: "Education",
                      value: "Lovely Professional University",
                      color:
                        "text-blue-600 dark:text-blue-300",
                    },
                    {
                      label: "Degree",
                      value: "B.Tech Computer Science",
                      color:
                        "text-purple-600 dark:text-purple-300",
                    },
                    {
                      label: "Location",
                      value: "Punjab, India",
                      color:
                        "text-emerald-600 dark:text-emerald-300",
                    },
                    {
                      label: "Status",
                      value: "Available for Work",
                      color:
                        "text-pink-600 dark:text-pink-300",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        justify-between
                        items-center
                        py-4
                        border-b
                        border-gray-100
                        dark:border-gray-700
                      "
                    >
                      <span className="text-gray-500 dark:text-gray-400">
                        {item.label}
                      </span>

                      <span className={`font-semibold ${item.color}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONTACT TAB */}
            {activeTab === "contact" && (
              <div
                className="
                  bg-white
                  dark:bg-[#111827]
                  rounded-3xl
                  p-8
                  border
                  border-gray-100
                  dark:border-gray-800
                  shadow-xl
                "
              >
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Get in Touch
                </h4>

                <div className="space-y-5">
                  {/* Email */}
                  <a
                    href="mailto:shrawansah3067@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      p-5
                      rounded-2xl
                      border
                      border-gray-100
                      dark:border-gray-700
                      hover:border-blue-300
                      dark:hover:border-blue-500/30
                      transition-all
                      duration-300
                      bg-gray-50
                      dark:bg-[#1F2937]
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-300">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </div>

                      <div className="font-semibold text-gray-800 dark:text-gray-200">
                        shrawansah3067@gmail.com
                      </div>
                    </div>

                    <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-500 transition-colors"></i>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+918360705978"
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      p-5
                      rounded-2xl
                      border
                      border-gray-100
                      dark:border-gray-700
                      hover:border-purple-300
                      dark:hover:border-purple-500/30
                      transition-all
                      duration-300
                      bg-gray-50
                      dark:bg-[#1F2937]
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-300">
                      <i className="fas fa-phone text-xl"></i>
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Phone
                      </div>

                      <div className="font-semibold text-gray-800 dark:text-gray-200">
                        +91 83607 05978
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/shrawansah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      p-5
                      rounded-2xl
                      border
                      border-gray-100
                      dark:border-gray-700
                      hover:border-sky-300
                      dark:hover:border-sky-500/30
                      transition-all
                      duration-300
                      bg-gray-50
                      dark:bg-[#1F2937]
                    "
                  >
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-300">
                      <i className="fab fa-linkedin text-xl"></i>
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        LinkedIn
                      </div>

                      <div className="font-semibold text-gray-800 dark:text-gray-200">
                        linkedin.com/in/shrawansah
                      </div>
                    </div>

                    <i className="fas fa-external-link-alt text-gray-400 group-hover:text-sky-500 transition-colors"></i>
                  </a>
                </div>
              </div>
            )}

            {/* Download CV */}
            <div className="pt-4">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  text-white
                  font-semibold
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-blue-500/30
                "
              >
                <i className="fas fa-download"></i>

                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;