'use client'

import { useState } from 'react'

// Main page component - this is what users see when they visit your website
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen">
      {/* Navigation Bar - fixed at the top */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200/80 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-slate-900 hover:text-blue-800 transition-colors">
            Tomas Urizar
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 hover:text-blue-800 transition-colors font-medium">
              About
            </a>
            <a href="#experience" className="text-slate-600 hover:text-blue-800 transition-colors font-medium">
              Experience
            </a>
            <a href="#projects" className="text-slate-600 hover:text-blue-800 transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-800 transition-colors font-medium">
              Contact
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-800 rounded-lg hover:bg-slate-100 transition-colors aria-expanded={menuOpen}"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-sm px-4 py-4 flex flex-col gap-2">
            <a href="#about" className="py-2 text-slate-600 hover:text-blue-800 font-medium" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#experience" className="py-2 text-slate-600 hover:text-blue-800 font-medium" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#projects" className="py-2 text-slate-600 hover:text-blue-800 font-medium" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="py-2 text-slate-600 hover:text-blue-800 font-medium" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section - Who you are, one glance */}
      <section id="home" className="pt-36 pb-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Tomas Urizar
          </h1>
          <div className="w-16 h-0.5 bg-blue-800 mx-auto mb-8" aria-hidden />
          <p className="text-xl md:text-2xl text-slate-700 mb-2 font-semibold">
            Industrial Civil Engineer · ML & software
          </p>
          <p className="text-lg text-blue-800 font-medium mb-10">
            Automation, data, and software for operations and product
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium shadow-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-800 hover:text-blue-800 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">About Me</h2>
          <div className="text-slate-600 mb-12 leading-relaxed">
            <p className="mb-4">
              I'm an Industrial Civil Engineer with over three years in operations, analytics, and technology. I've worked on process automation, data analysis, and software, including automated dashboards (e.g. Salesforce), workflow optimization, and digital solutions. I'm used to cross-functional collaboration and stakeholder management.
            </p>
            <p className="mb-4">
              I'm analytical and data-driven in how I work and like to base decisions on data. I'm now focused on ML and computer vision while continuing to build software and data tools. Spanish native, English C1 (IELTS).
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-800">●</span>
                Core Data Science
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'Statistical Analysis', 'Data Mining', 'ETL Tools', 'Machine Learning'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-800">●</span>
                AI & Machine Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Deep Learning', 'Computer Vision', 'PyTorch', 'AI Tools', 'Neural Networks', 'Image Processing'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-800">●</span>
                Analytics & Visualization
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Power BI', 'Tableau', 'Microsoft Excel', 'Data Visualization'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-800">●</span>
                Software Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'JavaScript', 'React', 'HTML/CSS', 'Salesforce', 'Process Automation'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">Languages</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Spanish (Native)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">English (Proficient - C1 IELTS)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Experience</h2>
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-lg border border-slate-200 border-l-4 border-l-blue-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Machine Learning & Computer Vision Engineer</h3>
                  <p className="text-blue-800 font-medium mb-1">Mirai Engineering</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Building and deploying deep learning models for medical image segmentation, focusing on kidney blood vessel analysis using PyTorch and computer vision techniques</p>
                </div>
                <span className="text-slate-500 text-sm font-medium whitespace-nowrap">Oct 2025 - Present</span>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 border-l-4 border-l-slate-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Working Holiday - Australia</h3>
                  <p className="text-blue-800 font-medium mb-1">Australia</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Developed software and data analysis tools; also held operational roles in snowmaking and wastewater treatment</p>
                </div>
                <span className="text-slate-500 text-sm font-medium whitespace-nowrap">Mar 2023 - Jun 2025</span>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 border-l-4 border-l-slate-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Regional Operations Coordinator</h3>
                  <p className="text-blue-800 font-medium mb-1">RedSalud CCHC, Chile</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Led data-driven operational analysis and optimization initiatives across multiple regional healthcare clinics, identifying efficiency improvements and implementing process enhancements</p>
                </div>
                <span className="text-slate-500 text-sm font-medium whitespace-nowrap">Jun 2022 - Dec 2022</span>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200 border-l-4 border-l-slate-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Technical Supervisor</h3>
                  <p className="text-blue-800 font-medium mb-1">Crystal Lagoons, Chile</p>
                  <p className="text-slate-600 text-sm leading-relaxed">Managed operations across 6 lagoon facilities and developed automated Salesforce dashboards that streamlined reporting and improved decision-making processes</p>
                </div>
                <span className="text-slate-500 text-sm font-medium whitespace-nowrap">Sep 2019 - Dec 2021</span>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="/resume.pdf"
              download="Tomas_Urizar_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Education</h2>
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 border-l-4 border-l-blue-800">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">Industrial Civil Engineering</h3>
                <p className="text-blue-800 font-medium">Adolfo Ibáñez University, Chile</p>
              </div>
              <span className="text-slate-500 text-sm font-medium whitespace-nowrap">2014 - 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Projects</h2>
          
          {/* Projects grid - Personal projects first (with links), then NDA projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Personal Projects - Can show code */}
            
            {/* 1 - Kidney Blood Vessel Segmentation (most potent) */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col group cursor-pointer">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 min-h-[3rem] group-hover:text-blue-800 transition-colors">Kidney Blood Vessel Segmentation</h3>
              <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                Web app for automated blood vessel segmentation in kidney images. U-Net in PyTorch, ONNX for inference, FastAPI + React. Dice 0.88.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">PyTorch</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">U-Net</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">FastAPI</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">React</span>
              </div>
              <div className="flex gap-4 min-h-[1.75rem] items-center flex-wrap">
                <a href="/projects/kidney-segmentation" className="text-blue-800 hover:underline text-sm font-medium transition-colors">
                  View Details →
                </a>
                <a href="https://miraiengineering.substack.com/p/automated-blood-vessel-segmentation" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium transition-colors">
                  Article →
                </a>
              </div>
            </div>

            {/* 2 - AI-Powered Gas Consumption Tracker */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col group cursor-pointer">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 min-h-[3rem] group-hover:text-blue-800 transition-colors">AI-Powered Gas Consumption Tracker</h3>
              <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                Full-stack web app: upload meter photos for AI-powered readings and track consumption with analytics.
                Built with Supabase backend and deployed on Vercel.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Img Vision</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Supabase</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Vercel</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Web App</span>
              </div>
              <div className="flex gap-4 min-h-[1.75rem] items-center">
                <a href="/projects/gas-consumption-tracker" className="text-blue-800 hover:underline text-sm font-medium transition-colors">View Details →</a>
                <a href="https://gas-consumption-tracker-v2.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium transition-colors">Try →</a>
              </div>
            </div>

            {/* 3 - Pow Spot */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col group cursor-pointer">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 min-h-[3rem] group-hover:text-blue-800 transition-colors">Pow Spot</h3>
              <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                Mobile-first app to discover and compare ski resorts in Chile: centers, weather, maps, services, and trip planning. Try it with Expo Go.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Expo</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">React Native</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Expo Router</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">JavaScript</span>
              </div>
              <div className="flex gap-4 min-h-[1.75rem] items-center flex-wrap">
                <a href="/projects/pow-spot" className="text-blue-800 hover:underline text-sm font-medium transition-colors">
                  View Details →
                </a>
              </div>
            </div>

            {/* 4 - Voice-Text Agent */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col group cursor-pointer">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 min-h-[3rem] group-hover:text-blue-800 transition-colors">Voice-Text Agent</h3>
              <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                Voice and text processing agent enabling seamless bidirectional conversion
                between speech and text with natural language understanding and intelligent processing.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Python</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Speech Recognition</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">TTS</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Streamlit</span>
              </div>
              <div className="flex gap-4 min-h-[1.75rem] items-center">
                <a href="/projects/voice-text-agent" className="text-blue-800 hover:underline text-sm font-medium transition-colors">View Details →</a>
                <a href="https://voice-text-agent-fvnaaf3l7t7viffhzxurln.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium transition-colors">Try →</a>
              </div>
            </div>

            {/* 5 - Tennis Court Reservation Automation */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col group cursor-pointer">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 min-h-[3rem] group-hover:text-blue-800 transition-colors">Tennis Court Reservation Automation</h3>
              <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                Automated tennis court reservation system that ensures bookings are made as soon as courts become available,
                automatically generating a reservation for the desired time slot.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Python</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Web Scraping</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Automation</span>
              </div>
              <div className="min-h-[1.75rem]" />
            </div>

            {/* 6 - Cabin Resort Website */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col group cursor-pointer">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 min-h-[3rem] group-hover:text-blue-800 transition-colors">Cabin Resort Website</h3>
              <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                Responsive, multi-page website for a cabin resort in southern Chile. Built with HTML, CSS, and JavaScript; 
                deployed and maintained via web hosting.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">HTML</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">CSS</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">JavaScript</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Web Hosting</span>
              </div>
              <div className="flex gap-4 min-h-[1.75rem] items-center">
                <a href="https://vuelodegaviotas.cl/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline text-sm font-medium transition-colors">
                  Visit Website →
                </a>
              </div>
            </div>

            {/* 7 - Portfolio Website (least potent) */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-blue-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col group cursor-pointer">
              <h3 className="text-xl font-semibold text-slate-900 mb-2 min-h-[3rem] group-hover:text-blue-800 transition-colors">Portfolio Website</h3>
              <p className="text-slate-600 mb-4 flex-grow text-sm leading-relaxed">
                Responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. Showcases projects, experience, and skills
                with a clean UI; deployable to Vercel.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Next.js</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">TypeScript</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">Tailwind CSS</span>
                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-md">UI/UX</span>
              </div>
              <div className="min-h-[1.75rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-10 text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <div className="mb-10 text-center">
            <div className="text-slate-600 mb-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <p>Email: <a href="mailto:tomasurizark@gmail.com" className="text-blue-800 hover:underline font-medium">tomasurizark@gmail.com</a></p>
              <p>Phone: <a href="tel:+4915221467163" className="text-blue-800 hover:underline font-medium">+49 152 21467163</a></p>
              <a
                href="https://www.linkedin.com/in/tomas-ignacio-urizar-kleinknecht-28430b187/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <form action="https://formsubmit.co/tomasurizark@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New contact from portfolio website" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Your Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Your Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition resize-none" placeholder="Your Message" />
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-400 text-center">
        <p>© {new Date().getFullYear()} Tomas Urizar Kleinknecht. All rights reserved.</p>
      </footer>
    </main>
  )
}

