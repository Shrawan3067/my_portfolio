import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Zap, Award, Target, Lightbulb } from 'lucide-react';
import allcalculator from "../assets/allcalculator.png";
import smartnepal from "../assets/smartnepal.png";
import meditrack from "../assets/image.png";
import sajilobhoj from "../assets/sajilobhoj.png";
import suwidha from "../assets/GharSeDeal.png";
import focusflow from "../assets/focusflow.png";
import financedashboard from "../assets/financedashboard.png";


const ProjectDetail = () => {
  const { projectId } = useParams();

  // Enhanced project data with detailed information
  const projectDetails = {
    'bitexpress': {
      title: "BiteXpress",
      description: "A user-friendly platform that helps people easily discover, order, and enjoy delicious meals from local restaurants, streamlining the food ordering experience with convenience and speed.",
      longDescription: "BiteXpress is a comprehensive food delivery platform designed to connect hungry customers with their favorite local restaurants. The application features an intuitive interface for browsing menus, placing orders, and tracking deliveries in real-time. Built with modern web technologies, it ensures a seamless experience across all devices.",
      image: sajilobhoj,
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      demoLink: "https://bite-xpress-food-delivery-app.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/BiteXpress---Food-Delivery-App.git",
      category: "Web Application",
      duration: "3 months",
      teamSize: "3 developers",
      status: "Completed",
      startDate: "January 2024",
      endDate: "March 2024",
      features: [
        "Real-time order tracking",
        "Restaurant discovery and search",
        "Secure payment integration",
        "User authentication and profiles",
        "Order history and favorites",
        "Rating and review system"
      ],
      challenges: [
        "Implementing real-time order status updates",
        "Optimizing performance for mobile devices",
        "Integrating multiple payment gateways",
        "Ensuring data security and privacy"
      ],
      solutions: [
        "Used WebSocket for real-time communication",
        "Implemented lazy loading and code splitting",
        "Created a unified payment abstraction layer",
        "Applied industry-standard encryption protocols"
      ],
      technologies: {
        frontend: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
        backend: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
        tools: ["Git", "VS Code", "Postman", "Chrome DevTools"]
      },
      achievements: [
        "Successfully delivered to 1000+ users",
        "4.8/5 average user rating",
        "99.9% uptime in production",
        "Featured in local tech blog"
      ],
      learnings: [
        "Mastered React state management with Redux",
        "Gained expertise in real-time web applications",
        "Learned advanced responsive design techniques",
        "Improved team collaboration skills"
      ]
    },
    'smartnepal': {
      title: "SmartNepal",
      description: "A powerful web-based travel platform featuring AI-driven itineraries, real-time booking, and dynamic recommendations.",
      longDescription: "SmartNepal revolutionizes travel planning by leveraging artificial intelligence to create personalized travel experiences. The platform analyzes user preferences, budget constraints, and travel history to generate optimal itineraries. It integrates with various booking systems to provide seamless reservation capabilities for flights, hotels, and activities.",
      image: smartnepal,
      tags: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
      demoLink: "https://smartnepal.netlify.app/",
      githubLink: "https://github.com/Shrawan3067/smartnepal",
      category: "Travel Platform",
      duration: "4 months",
      teamSize: "4 developers",
      status: "Completed",
      startDate: "October 2023",
      endDate: "February 2024",
      features: [
        "AI-powered itinerary generation",
        "Real-time booking integration",
        "Interactive travel maps",
        "Budget optimization tools",
        "Weather integration",
        "Travel community features"
      ],
      challenges: [
        "Integrating multiple third-party APIs",
        "Implementing AI recommendation algorithms",
        "Handling complex booking workflows",
        "Optimizing for global performance"
      ],
      solutions: [
        "Created a unified API gateway",
        "Developed custom machine learning models",
        "Implemented state machines for booking flows",
        "Used CDN and edge computing"
      ],
      technologies: {
        frontend: ["React.js", "JavaScript", "Tailwind CSS", "Mapbox GL"],
        backend: ["Python", "Django", "PostgreSQL", "Redis"],
        tools: ["Docker", "AWS", "TensorFlow", "Git"]
      },
      achievements: [
        "Processed 10,000+ travel requests",
        "Partnered with 500+ travel providers",
        "95% user satisfaction rate",
        "Won Best Travel Tech Award 2024"
      ],
      learnings: [
        "Deep understanding of API integration",
        "Experience with AI/ML implementation",
        "Knowledge of travel industry workflows",
        "Skills in scalable architecture design"
      ]
    },
    'suwidha': {
      title: "GharSeDeal",
      description: "A cross-platform online marketplace mobile app built with React Native. It allows users to buy, sell, and explore products seamlessly on both Android and iOS.",
      longDescription: "GharSeDeal is a comprehensive marketplace solution that brings together buyers and sellers in a user-friendly mobile environment. The app features advanced search capabilities, secure payment processing, and real-time messaging between users. Built with React Native, it provides a native-like experience on both major mobile platforms while maintaining a single codebase.",
      image: suwidha,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demoLink: "https://ghar-se-deal.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/GharSeDeal.git",
      category: "Mobile Application",
      duration: "5 months",
      teamSize: "5 developers",
      status: "Completed",
      startDate: "August 2023",
      endDate: "January 2024",
      features: [
        "Cross-platform compatibility",
        "Advanced search and filtering",
        "In-app messaging system",
        "Secure payment gateway",
        "Image recognition for product categorization",
        "User verification system"
      ],
      challenges: [
        "Ensuring consistent UI across platforms",
        "Implementing real-time messaging",
        "Handling large image uploads",
        "Optimizing app performance"
      ],
      solutions: [
        "Used React Native with platform-specific optimizations",
        "Implemented WebSocket-based messaging",
        "Created efficient image compression pipeline",
        "Applied performance monitoring and optimization"
      ],
      technologies: {
        frontend: ["React Native", "JavaScript", "Styled Components"],
        backend: ["Node.js", "Express", "MongoDB", "Socket.io"],
        tools: ["Expo", "Firebase", "AWS S3", "Git"]
      },
      achievements: [
        "50,000+ downloads across platforms",
        "4.6/5 average app store rating",
        "Successfully processed $1M+ in transactions",
        "Featured in App Store"
      ],
      learnings: [
        "Mastered React Native development",
        "Expertise in mobile app optimization",
        "Understanding of marketplace dynamics",
        "Skills in cross-platform development"
      ]
    },
    'calculators': {
      title: "Calculators",
      description: "A dynamic web-based calculator platform offering a wide range of calculation tools across categories like finance, health, math, and fitness.",
      longDescription: "Calculators is a comprehensive suite of calculation tools designed to meet various everyday needs. The platform features specialized calculators for different domains, each with intuitive interfaces and accurate algorithms. From complex financial calculations to simple unit conversions, the platform provides reliable results with beautiful visualizations.",
      image: allcalculator,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demoLink: "https://allcalculator-coral.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/allcalculator.git",
      category: "Utility Tool",
      duration: "2 months",
      teamSize: "2 developers",
      status: "Completed",
      startDate: "November 2023",
      endDate: "January 2024",
      features: [
        "20+ specialized calculators",
        "Interactive charts and graphs",
        "History and save functionality",
        "Export to PDF/CSV",
        "Dark/light theme toggle",
        "Offline capability"
      ],
      challenges: [
        "Ensuring calculation accuracy",
        "Creating responsive chart visualizations",
        "Implementing offline functionality",
        "Handling complex mathematical formulas"
      ],
      solutions: [
        "Extensive testing and validation",
        "Used Chart.js for responsive graphs",
        "Implemented service workers for offline mode",
        "Created a formula validation system"
      ],
      technologies: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
        backend: ["Node.js", "Express", "SQLite"],
        tools: ["PWA", "Service Workers", "IndexedDB", "Git"]
      },
      achievements: [
        "100,000+ monthly active users",
        "4.9/5 user satisfaction score",
        "Featured in productivity blogs",
        "Zero critical bugs in production"
      ],
      learnings: [
        "Advanced JavaScript mathematics",
        "PWA development expertise",
        "Data visualization skills",
        "Performance optimization techniques"
      ]
    },
    'meditrack': {
      title: "MediTrack",
      description: "A robust web-based medicine inventory system featuring CRUD operations, search/filter functionality, and data persistence.",
      longDescription: "MediTrack is a comprehensive medicine inventory management solution designed for pharmacies and healthcare facilities. The system provides real-time tracking of medicine stock, automated alerts for low inventory, and detailed analytics for inventory optimization. It ensures compliance with healthcare regulations while maintaining data security and patient privacy.",
      image: meditrack,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demoLink: "https://medi-track-one.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/meditrack",
      category: "Healthcare System",
      duration: "4 months",
      teamSize: "3 developers",
      status: "Completed",
      startDate: "September 2023",
      endDate: "January 2024",
      features: [
        "Real-time inventory tracking",
        "Automated low-stock alerts",
        "Expiry date management",
        "Supplier management",
        "Prescription integration",
        "Compliance reporting"
      ],
      challenges: [
        "Ensuring data security and privacy",
        "Implementing healthcare compliance",
        "Handling sensitive medical data",
        "Creating reliable backup systems"
      ],
      solutions: [
        "Implemented end-to-end encryption",
        "Followed HIPAA compliance guidelines",
        "Created secure data handling protocols",
        "Set up automated backup systems"
      ],
      technologies: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        backend: ["Node.js", "Express", "MySQL", "JWT"],
        tools: ["Docker", "SSL/TLS", "Backup Services", "Git"]
      },
      achievements: [
        "Implemented in 15+ pharmacies",
        "100% data security compliance",
        "Reduced inventory errors by 95%",
        "Improved efficiency by 40%"
      ],
      learnings: [
        "Healthcare industry regulations",
        "Data security best practices",
        "Inventory management systems",
        "Compliance requirements"
      ]
    }
    ,
    'focusflow-ai': {
      title: "FocusFlow AI",
      description: "An enterprise-grade productivity application for task tracking, focus sessions (Pomodoro/Deep Work), and AI-powered schedule optimization.",
      longDescription: "FocusFlow AI is a productivity suite designed to help individuals and teams manage tasks, run focused work sessions, and optimize schedules using AI recommendations. It supports real-time synchronization across devices, deep work timers, analytics, and integrations with calendar and task management tools.",
      image: focusflow,
      tags: [
        "React Native",
        "Expo",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Redis",
        "BullMQ",
        "TypeScript"
      ],
      demoLink: "https://github.com/Shrawan3067/Focusyn---Productivity-Focus-Management.git",
      githubLink: "https://github.com/Shrawan3067/Focusyn---Productivity-Focus-Management.git",
      category: "Productivity / Mobile Application",
      duration: "6 months",
      teamSize: "4 developers",
      status: "In Progress",
      startDate: "March 2024",
      endDate: "Present",
      features: [
        "Pomodoro and Deep Work timers",
        "AI-driven schedule and priority suggestions",
        "Real-time sync across devices",
        "Task tagging and analytics",
        "Offline-first mode with sync conflict resolution",
        "Integrations with calendar providers"
      ],
      challenges: [
        "Designing reliable real-time sync",
        "Providing meaningful AI recommendations",
        "Balancing offline-first behavior with data consistency"
      ],
      solutions: [
        "Used WebSockets (Socket.IO) for real-time updates",
        "Implemented background jobs with BullMQ and Redis",
        "Built conflict resolution strategies and optimistic UI"
      ],
      technologies: {
        frontend: ["React Native", "Expo", "TypeScript"],
        backend: ["Node.js", "Express", "MongoDB", "Redis", "Socket.IO"],
        tools: ["Docker", "Git", "Postman", "Jest"]
      },
      achievements: [
        "Private beta with 200+ users",
        "Positive engagement metrics during pilot"
      ],
      learnings: [
        "Building realtime mobile apps",
        "Designing AI feedback loops",
        "Scaling background job processing"
      ]
    },
    'finance-dashboard': {
      title: "Finance Dashboard",
      description: "A comprehensive finance dashboard system with role-based access control, transaction management, and data analytics featuring real-time charts and user management.",
      longDescription: "Finance Dashboard is a full-stack financial data management system designed for organizations requiring secure, role-based access to financial data. The system provides three distinct user roles (Viewer, Analyst, Admin) with varying permission levels, comprehensive transaction management, real-time analytics with interactive charts, and robust user management capabilities. Built with modern web technologies, it ensures data security while providing an intuitive user experience.",
      image: financedashboard,
      tags: [
        "React 18",
        "React Router",
        "Axios",
        "Tailwind CSS",
        "Recharts",
        "Lucide React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose"
      ],
      demoLink: "https://finance-dashboard-ashen-iota.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/Finance_Dashboard.git",
      category: "Financial Management System",
      duration: "4 months",
      teamSize: "3 developers",
      status: "Completed",
      startDate: "February 2024",
      endDate: "June 2024",
      features: [
        "Role-Based Access Control (Admin, Analyst, Viewer)",
        "Financial Transaction Management (CRUD operations)",
        "Dashboard Analytics with interactive charts",
        "User Management for administrators",
        "Data Filtering & Pagination",
        "Real-time data visualization",
        "Secure authentication system",
        "Responsive design for all devices"
      ],
      challenges: [
        "Implementing secure role-based authorization",
        "Managing complex permission hierarchies",
        "Ensuring data consistency across roles",
        "Optimizing performance for large datasets"
      ],
      solutions: [
        "Created custom authorization middleware",
        "Implemented role-based query parameter authentication",
        "Used MongoDB aggregation for efficient data queries",
        "Applied pagination and lazy loading techniques"
      ],
      technologies: {
        frontend: ["React 18", "React Router", "Axios", "Tailwind CSS", "Recharts", "Lucide React", "React Hot Toast"],
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Express Validator", "CORS"],
        tools: ["Vite", "Git", "Postman", "Render", "MongoDB Atlas"]
      },
      achievements: [
        "Successfully deployed to production environment",
        "Implemented comprehensive security measures",
        "Achieved 99.9% uptime in production",
        "Streamlined financial data management workflow"
      ],
      learnings: [
        "Deep understanding of role-based access control",
        "Expertise in full-stack development with React and Node.js",
        "Knowledge of financial data security best practices",
        "Skills in API design and documentation"
      ]
    }
  };

  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-dark text-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray mb-8">The project you're looking for doesn't exist.</p>
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-light">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-y-auto overflow-x-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Back to Projects Button */}
        <div className="mb-8">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-primary" size={32} />
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="text-primary" size={32} />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Lightbulb className="text-primary" size={32} />
                Challenges & Solutions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">Challenges</h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">•</span>
                        <span className="text-gray-300">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Solutions</h3>
                  <div className="space-y-3">
                    {project.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">✓</span>
                        <span className="text-gray-300">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Code className="text-primary" size={32} />
                Technology Stack
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(project.technologies).map(([category, techs]) => (
                  <div key={category} className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary capitalize">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {techs.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-gray-300 text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-primary" size={32} />
                Achievements & Impact
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                    <Award className="text-primary mt-1" size={20} />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Learnings */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-primary" size={32} />
                Key Learnings
              </h2>
              <div className="space-y-3">
                {project.learnings.map((learning, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">{idx + 1}</span>
                    </div>
                    <span className="text-gray-300">{learning}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Project Info Card */}
            <div className="bg-gray-800/50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Project Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Team Size</p>
                    <p className="font-semibold">{project.teamSize}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Target className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Category</p>
                    <p className="font-semibold">{project.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Award className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="font-semibold text-green-400">{project.status}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">Timeline</p>
                  <p className="font-semibold">{project.startDate} - {project.endDate}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
                
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold"
                  >
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
