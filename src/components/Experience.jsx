import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-300 font-semibold text-lg uppercase tracking-wider mb-4">
            Professional Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Experience
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto">
            Practical experience in software development, Java desktop
            applications, and modern programming concepts.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-6xl mx-auto">
          <div
            className="
              group
              relative
              grid
              md:grid-cols-2
              gap-10
              items-center
              bg-white
              dark:bg-[#111827]
              rounded-3xl
              p-8
              md:p-10
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

            {/* Left Content */}
            <div className="relative z-10">
              {/* Timeline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>

                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  July - August 2023
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Summer Training / Internship
              </h3>

              {/* Company */}
              <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-6">
                Technonto Academy
              </h4>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Gained hands-on experience in Java Swing for GUI-based desktop
                application development. Developed interactive applications using
                Swing components like JFrame, JPanel, JButton, JTextField, and
                JTable. Worked extensively on event-driven programming and
                implemented ActionListener, KeyListener, and MouseListener for
                responsive user interactions.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                  Java Swing
                </span>

                <span className="px-4 py-2 bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                  Event Handling
                </span>

                <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold">
                  Desktop Applications
                </span>
              </div>

              {/* Certificate Button */}
              <a
                href="https://drive.google.com/file/d/1nhRUigAZcna5ZtHXGePsBvYkv1O9zELu/view"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  py-3
                  bg-gradient-to-r
                  from-blue-600
                  to-purple-600
                  text-white
                  font-semibold
                  rounded-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-lg
                  hover:shadow-blue-500/30
                "
              >
                <i className="fas fa-external-link-alt"></i>

                View Certificate
              </a>
            </div>

            {/* Right Image */}
            <div className="relative z-10">
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Internship Experience"
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6">
                  <div className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                    <p className="text-white text-sm font-medium">
                      Internship Experience
                    </p>

                    <h5 className="text-white text-lg font-bold mt-1">
                      Java Development
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Dot */}
            <div className="absolute top-6 right-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Continuously building real-world experience and modern development
            expertise.
          </p>
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }

        .transition-transform {
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 500ms;
        }

        .transition-opacity {
          transition-property: opacity;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </section>
  );
};

export default Experience;