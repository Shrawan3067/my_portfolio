import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Code, Zap, Award, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

import caliwoImg from "../assets/caliwo.jpg";
import allcalculatorImg from "../assets/allcalculator.png";
import smartnepalImg from "../assets/smartnepal.png";
import meditrackImg from "../assets/image.png";
import sajilobhojImg from "../assets/bitexpress2.png";
import gharSeDealImg from "../assets/GharSeDeal.png";
import focusflowImg from "../assets/focusflow.png";
import financedashboardImg from "../assets/financedashboard.png";

const ProjectDetail = () => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const projectDetails = {
    'caliwo': {
      title: "Caliwo — AI Powered Nutrition Tracking App",
      description: "An AI-powered nutrition tracking application that helps users log meals, estimate calories and macronutrients, and track daily nutrition goals.",
      longDescription: "Caliwo was conceived and engineered to eliminate the manual friction of calorie tracking. Leveraging computer vision and AI meal analysis, users can photograph meals to receive instant nutrient breakdowns, macronutrient distributions, and intelligent recommendations tailored to their fitness and dietary goals. Built with React Native, TypeScript, and a scalable Node.js/PostgreSQL backend.",
      image: caliwoImg,
      tags: ["React", "React Native", "Expo", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
      demoLink: "https://github.com/Shrawan3067",
      githubLink: "https://github.com/Shrawan3067",
      category: "Mobile Application & AI",
      duration: "3 months",
      teamSize: "Independent / Lead",
      status: "Live Project",
      startDate: "May 2025",
      endDate: "July 2025",
      features: [
        "AI-powered meal photo analysis and nutrient estimation",
        "Interactive daily calorie and macronutrient progress rings",
        "Mobile-optimized reusable UI component architecture",
        "Secure backend REST APIs for user dietary history and profiles",
        "Nutrition dashboards with weekly analytics and trend forecasting",
        "Offline-capable meal logging with cloud synchronization"
      ],
      challenges: [
        "Ensuring high accuracy in estimating portions and macronutrients from meal photos",
        "Designing smooth 60fps mobile interfaces for data-rich dashboards",
        "Optimizing relational queries in PostgreSQL for real-time aggregation"
      ],
      solutions: [
        "Integrated AI vision pipelines with structured fallback prompts and nutritional databases",
        "Utilized React Native with memoized components and optimized re-renders",
        "Implemented indexed PostgreSQL schemas and server-side caching for quick lookups"
      ],
      technologies: {
        frontend: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
        tools: ["Postman", "Git", "VS Code", "Expo Go"]
      },
      achievements: [
        "Successfully deployed mobile and web companion interfaces",
        "Reduced meal logging time from minutes to under 5 seconds with AI",
        "Seamless cross-platform performance on iOS and Android"
      ],
      learnings: [
        "Integrating multimodal AI capabilities into consumer mobile workflows",
        "Deepening relational database modeling and schema indexing with PostgreSQL",
        "Mastering state synchronization between mobile clients and cloud backends"
      ]
    },
    'allcalculator': {
      title: "AllCalculator.net — Multi-Category Platform",
      description: "A calculator platform featuring 750+ calculators and articles across multiple categories, focusing on usability, responsive design, and accessibility.",
      longDescription: "AllCalculator.net is an extensive web platform developed to deliver instantaneous, mathematically rigorous calculations across finance, health, fitness, algebra, and everyday unit conversions. The platform features over 750 distinct calculators accompanied by explanatory guides, achieving significant organic reach and serving more than 3,000 monthly visitors.",
      image: allcalculatorImg,
      tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
      demoLink: "https://allcalculator-coral.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/allcalculator.git",
      category: "Full Stack Web Platform",
      duration: "3 months",
      teamSize: "Full Stack Engineer",
      status: "Live & Growing",
      startDate: "November 2025",
      endDate: "January 2026",
      features: [
        "750+ interactive calculation engines across finance, health, and math",
        "Modular and reusable UI component architecture for rapid calculator expansion",
        "Input validation and real-time computation without page reloads",
        "SEO-optimized architecture with dynamic metadata and semantic HTML",
        "Responsive glassmorphic design and light/dark theme toggles",
        "Integrated calculation history and printable summary reports"
      ],
      challenges: [
        "Structuring over 750 calculators without code bloat and slow initial bundle times",
        "Maintaining precision in complex amortization and compounding formulas",
        "Maximizing SEO visibility to attract organic search traffic"
      ],
      solutions: [
        "Created a modular engine structure with dynamic code-splitting and lazy-loaded routes",
        "Authored rigorous unit test suites with Jest to guarantee mathematical accuracy",
        "Implemented server-side rendering hints, OpenGraph tags, and semantic structured data"
      ],
      technologies: {
        frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", "PostgreSQL"],
        tools: ["Jest", "Git", "Vercel", "Chrome DevTools"]
      },
      achievements: [
        "Grew organic platform traffic to 3,000+ monthly visitors",
        "Built library of 750+ interactive calculation utilities",
        "Sub-100ms calculation response time across all device tiers"
      ],
      learnings: [
        "Scaling component libraries and maintaining uniform design systems",
        "SEO engineering best practices for utility-driven web applications",
        "Advanced client-side caching and performance optimization"
      ]
    },
    'suwidha': {
      title: "GharSeDeal — Online Marketplace",
      description: "A marketplace application connecting buyers and sellers with 10× faster listing responses through server-side pagination and MongoDB query optimization.",
      longDescription: "GharSeDeal is an online marketplace engineered for speed, convenience, and scalability. As Founder & Software Engineer, I developed the platform from concept through production deployment, architecting responsive frontend interfaces with React, TypeScript, and Tailwind CSS, alongside robust Node.js/Express REST APIs. By implementing server-side pagination and optimized MongoDB indexing, listing API response latency was reduced by 10× under high volume.",
      image: gharSeDealImg,
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      demoLink: "https://ghar-se-deal.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/GharSeDeal.git",
      category: "E-Commerce & Marketplace",
      duration: "Ongoing",
      teamSize: "Founder & Lead Engineer",
      status: "In Active Production",
      startDate: "September 2025",
      endDate: "Present",
      features: [
        "10× optimized product listing endpoints with server-side pagination",
        "Modular Node.js and Express REST API architecture with JWT authentication",
        "Compound indexing and aggregation query optimization in MongoDB",
        "Interactive seller listing workflow with image management and state handling",
        "Real-time search, multi-factor filtering, and category navigation",
        "Clean, responsive UI with reusable TypeScript component library"
      ],
      challenges: [
        "Bottlenecks in marketplace listing API responses as database records scaled",
        "Handling complex queries with multiple simultaneous filter conditions",
        "Building a reliable state management flow across multi-step product posting"
      ],
      solutions: [
        "Introduced cursor and offset-based server-side pagination with compound indexes",
        "Refactored MongoDB aggregation pipelines to eliminate redundant document scans",
        "Constructed modular controller-service-repository pattern in Express"
      ],
      technologies: {
        frontend: ["React.js", "TypeScript", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
        tools: ["Postman", "Git", "JWT", "Vercel"]
      },
      achievements: [
        "10× improvement in marketplace listing API response latency",
        "Engineered full production stack from database to responsive client UI",
        "Zero downtime deployment with seamless user authentication"
      ],
      learnings: [
        "Database profiling, query execution plan analysis, and indexing strategies",
        "Architecting maintainable, secure REST API middleware layers",
        "Product leadership and prioritizing features based on user workflows"
      ]
    },
    'focusflow-ai': {
      title: "FocusFlow AI — Productivity Management",
      description: "An enterprise-grade productivity suite for task tracking, focus sessions (Pomodoro/Deep Work), and AI schedule optimization.",
      longDescription: "FocusFlow AI merges time-tested focus techniques like Pomodoro and Deep Work with AI-driven scheduling assistance. Designed with an offline-first philosophy, the system keeps mobile and desktop clients continuously synchronized via WebSockets and Redis queues, allowing professionals to maintain peak productivity without distraction.",
      image: focusflowImg,
      tags: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Socket.IO", "Redis", "BullMQ", "TypeScript"],
      demoLink: "https://github.com/Shrawan3067/Focusyn---Productivity-Focus-Management.git",
      githubLink: "https://github.com/Shrawan3067/Focusyn---Productivity-Focus-Management.git",
      category: "Productivity & Real-time Systems",
      duration: "6 months",
      teamSize: "Lead Full Stack Developer",
      status: "Active Development",
      startDate: "March 2024",
      endDate: "Present",
      features: [
        "Customizable Pomodoro and Deep Work focus session timers",
        "AI-assisted task priority and schedule optimization algorithms",
        "Real-time event synchronization using WebSockets and Socket.IO",
        "Background job processing pipeline built with Redis and BullMQ",
        "Comprehensive productivity heatmaps and weekly deep work metrics"
      ],
      challenges: [
        "Handling concurrent updates and state conflicts between offline sessions and cloud",
        "Managing timer precision in mobile background states",
        "Scaling asynchronous task notifications without server strain"
      ],
      solutions: [
        "Built timestamp-based conflict resolution and optimistic state updates",
        "Employed native background execution APIs with BullMQ worker pools",
        "Separated WebSocket broadcast channels by user workspace tenants"
      ],
      technologies: {
        frontend: ["React Native", "Expo", "TypeScript"],
        backend: ["Node.js", "Express", "MongoDB", "Redis", "Socket.IO", "BullMQ"],
        tools: ["Docker", "Postman", "Git", "Jest"]
      },
      achievements: [
        "Maintained sub-50ms message latency across WebSocket sessions",
        "Pilot tested with 200+ users with high daily retention",
        "Engineered reliable asynchronous background queue architecture"
      ],
      learnings: [
        "Distributed queue architectures with Redis and BullMQ",
        "Real-time state synchronization pitfalls and solutions",
        "Designing intuitive mobile interfaces for time-tracking"
      ]
    },
    'bitexpress': {
      title: "BiteXpress — Food Delivery Platform",
      description: "A user-friendly platform that helps people discover, order, and track meals from local restaurants.",
      longDescription: "BiteXpress simplifies food delivery with an elegant browsing interface, real-time cart and order status tracking, and seamless restaurant menu management. Engineered with React, TypeScript, and Tailwind CSS for exceptional responsiveness across mobile and desktop devices.",
      image: sajilobhojImg,
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
      demoLink: "https://bite-xpress-food-delivery-app.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/BiteXpress---Food-Delivery-App.git",
      category: "E-Commerce Web Application",
      duration: "3 months",
      teamSize: "Full Stack Engineer",
      status: "Completed",
      startDate: "January 2024",
      endDate: "March 2024",
      features: [
        "Interactive restaurant menu explorer with categories and search",
        "Dynamic shopping cart with automated total and delivery calculations",
        "Order history tracking and simulated real-time status updates",
        "Fully responsive mobile-first UI with Tailwind CSS"
      ],
      challenges: [
        "Ensuring instant cart recalculations without visual jitter",
        "Designing a responsive menu layout that accommodates large menus"
      ],
      solutions: [
        "Utilized React state management and local storage persistence",
        "Implemented virtualization for lengthy restaurant item catalogs"
      ],
      technologies: {
        frontend: ["React.js", "TypeScript", "Tailwind CSS"],
        backend: ["Node.js", "Express.js"],
        tools: ["Git", "VS Code", "Vercel"]
      },
      achievements: [
        "Deployed functional food delivery experience with 99.9% uptime",
        "Smooth mobile navigation and instant ordering workflow"
      ],
      learnings: [
        "Deepened state management and TypeScript typing in React",
        "Optimizing user journeys for high-conversion e-commerce funnels"
      ]
    },
    'finance-dashboard': {
      title: "Finance Dashboard — RBAC & Analytics",
      description: "A comprehensive full-stack financial data management system with 3-tier Role-Based Access Control and real-time interactive charts.",
      longDescription: "Finance Dashboard is an enterprise-ready dashboard tailored for organizations that require stringent security, auditing, and visual analytics. It implements three distinct user roles (Admin, Analyst, Viewer) with strict route and API permission guards, alongside interactive financial transaction charts powered by Recharts.",
      image: financedashboardImg,
      tags: ["React 18", "Tailwind CSS", "Recharts", "Node.js", "Express", "MongoDB"],
      demoLink: "https://finance-dashboard-ashen-iota.vercel.app/login",
      githubLink: "https://github.com/Shrawan3067",
      category: "Enterprise Financial System",
      duration: "3 months",
      teamSize: "Full Stack Developer",
      status: "Completed",
      startDate: "April 2024",
      endDate: "June 2024",
      features: [
        "3-Tier Role-Based Access Control (RBAC) with secure JWT tokens",
        "Interactive transaction trend graphs and revenue breakdown charts",
        "Admin user management portal with permission modification controls",
        "Exportable financial reports in CSV and PDF formats"
      ],
      challenges: [
        "Enforcing consistent permission boundaries on both client routes and backend controllers",
        "Rendering large transaction datasets smoothly in chart components"
      ],
      solutions: [
        "Created reusable higher-order permission wrappers and Express auth middleware",
        "Aggregated transaction sums on the database level before rendering in Recharts"
      ],
      technologies: {
        frontend: ["React 18", "Tailwind CSS", "Recharts"],
        backend: ["Node.js", "Express", "MongoDB", "JWT"],
        tools: ["Postman", "Git", "VS Code"]
      },
      achievements: [
        "100% role separation compliance across all API endpoints",
        "Zero unauthorized data leaks in role security audits"
      ],
      learnings: [
        "Enterprise RBAC patterns and security token rotation",
        "Financial data modeling and aggregation pipeline optimization"
      ]
    },
    'smartnepal': {
      title: "SmartNepal — AI Travel Platform",
      description: "A web-based travel ecosystem featuring AI-driven itineraries, real-time booking, and dynamic recommendations.",
      longDescription: "SmartNepal enables travelers to effortlessly explore Nepal's premier destinations with smart itinerary planning, regional insights, and direct booking integrations.",
      image: smartnepalImg,
      tags: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
      demoLink: "https://smartnepal.netlify.app/",
      githubLink: "https://github.com/Shrawan3067/smartnepal",
      category: "Travel & Hospitality",
      duration: "3 months",
      teamSize: "Frontend Developer",
      status: "Completed",
      startDate: "October 2023",
      endDate: "January 2024",
      features: [
        "Destination discovery with categorized regional guides",
        "Interactive travel map integration and itinerary suggestions",
        "Responsive, image-rich travel showcase with modern glassmorphism"
      ],
      challenges: ["Optimizing high-resolution photography assets for fast initial load"],
      solutions: ["Applied modern WebP formats and lazy loading across all image collections"],
      technologies: {
        frontend: ["React.js", "JavaScript", "Tailwind CSS"],
        backend: ["REST APIs"],
        tools: ["Netlify", "Git", "VS Code"]
      },
      achievements: ["Successfully featured diverse travel destinations across Nepal"],
      learnings: ["Building visually captivating, content-heavy web experiences"]
    },
    'meditrack': {
      title: "MediTrack — Medicine Inventory Platform",
      description: "A medicine inventory management platform featuring CRUD operations, search/filter functionality, and data persistence.",
      longDescription: "MediTrack was developed to solve medicine stock tracking and expiration monitoring for pharmacies. With intuitive inventory controls, pharmacists can track stock quantities, receive expiration warnings, and generate restock lists.",
      image: meditrackImg,
      tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MySQL"],
      demoLink: "https://medi-track-one.vercel.app/",
      githubLink: "https://github.com/Shrawan3067/meditrack",
      category: "Healthcare Tool",
      duration: "2 months",
      teamSize: "Full Stack Developer",
      status: "Completed",
      startDate: "September 2023",
      endDate: "November 2023",
      features: [
        "Full CRUD operations for pharmaceutical stock items",
        "Automated alerts for near-expiry and low-stock items",
        "Instant filtering by batch number, category, and supplier"
      ],
      challenges: ["Structuring relational data tables for medicine batches and vendors"],
      solutions: ["Designed normalized MySQL schemas with foreign key relationships"],
      technologies: {
        frontend: ["HTML5", "CSS3", "JavaScript"],
        backend: ["Node.js", "Express", "MySQL"],
        tools: ["Git", "Vercel"]
      },
      achievements: ["Practical inventory management utility for healthcare operations"],
      learnings: ["Relational schema design and SQL query fundamentals"]
    }
  };

  const project = projectDetails[projectId] || projectDetails['caliwo'];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 pt-28 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-500" />
            <span>Back to Projects</span>
          </Link>

          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Hero Section of Case Study */}
        <div className="glass-card p-6 sm:p-10 mb-10 overflow-hidden relative">
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              {project.description}
            </p>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl bg-slate-100 dark:bg-slate-950 aspect-video relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Metadata quick bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800/80">
            <div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Duration</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">{project.duration}</div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Role</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">{project.teamSize}</div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Timeline</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">{project.startDate} – {project.endDate}</div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Codebase</div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-indigo-600 dark:text-cyan-400 hover:underline flex items-center gap-1 mt-1"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Case Study Sections */}
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Main Content (8 cols) */}
          <div className="md:col-span-8 space-y-8">
            
            {/* Overview */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <Lightbulb className="w-5 h-5 text-indigo-500" />
                Project In-Depth Overview
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                Architectural Highlights & Features
              </h3>
              <div className="space-y-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-1" />
                    <span className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Challenges & Solutions */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                <Target className="w-5 h-5 text-amber-500" />
                Challenges & Engineering Solutions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-amber-600 dark:text-amber-400 tracking-wider mb-2 font-bold">
                    Technical Challenges
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="leading-relaxed">{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 tracking-wider mb-2 font-bold">
                    Implemented Solutions
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {project.solutions.map((sol, idx) => (
                      <li key={idx} className="leading-relaxed">{sol}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements & Outcomes */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <Award className="w-5 h-5 text-indigo-500" />
                Measurable Impact & Achievements
              </h3>
              <div className="space-y-2.5">
                {project.achievements.map((achieve, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
                    <span className="text-sm text-slate-800 dark:text-slate-200">{achieve}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Tech Stack (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Tech Stack Box */}
            <div className="glass-card p-6 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Technology Stack
              </h3>

              {project.technologies.frontend && (
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Frontend</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.frontend.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.technologies.backend && (
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Backend & Database</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.backend.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.technologies.tools && (
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Tools & DevOps</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.tools.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links Card */}
            <div className="glass-card p-6 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Quick Actions</h4>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-xs py-2.5 justify-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Live Application</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-xs py-2.5 justify-center"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
