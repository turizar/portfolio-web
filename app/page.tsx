// Main page component - this is what users see when they visit your website
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar - fixed at the top */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#home" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Tomas Urizar
          </a>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Experience
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - First thing visitors see */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Tomas Urizar
          </h1>
          
          {/* Tagline - Differentiator */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold">
            Industrial Engineer & ML Engineer
          </p>
          <p className="text-lg md:text-xl text-blue-600 mb-6 font-medium">
            Combining Process Optimization with Machine Learning
          </p>
          
          {/* Short description - Concise */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Developing ML models and data-driven solutions across biotechnology, healthcare, and operations. 3+ years of experience in statistical analysis, process automation, machine learning, and building web applications.
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">About Me</h2>
          
          <div className="text-gray-700 mb-8">
            <p className="mb-3">
              My experience spans healthcare operations, water treatment facilities, and process optimization, where I've led data-driven 
              initiatives and built automated systems that improved operational efficiency. I combine technical expertise with hands-on 
              operations management experience, focusing on translating complex data into actionable insights and implementing solutions 
              that solve real operational challenges across diverse industries.
            </p>
            <p className="mb-3">
              I also build web applications and data tools, from responsive sites to ML-powered apps, when the problem calls for it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Data Science Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">●</span>
                Core Data Science
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'Statistical Analysis', 'Data Mining', 'ETL Tools', 'Machine Learning'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* AI & ML Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-purple-600">●</span>
                AI & Machine Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Deep Learning', 'Computer Vision', 'PyTorch', 'AI Tools', 'Neural Networks', 'Image Processing'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Analytics & Visualization */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-green-600">●</span>
                Analytics & Visualization
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Power BI', 'Tableau', 'Microsoft Excel', 'Data Visualization'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Software Development */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-orange-600">●</span>
                Software Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'JavaScript', 'HTML/CSS', 'Salesforce', 'Process Automation'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Languages */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Languages</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium">
                Spanish (Native)
              </span>
              <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium">
                English (Proficient - C1 IELTS)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Concise and Professional */}
      <section id="experience" className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Experience</h2>
          
          {/* Experience items - Clean and concise format */}
          <div className="space-y-4">
            {/* Experience Item 1 - Current */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Machine Learning & Computer Vision Engineer</h3>
                  <p className="text-blue-600 font-medium mb-1">Mirai Engineering</p>
                  <p className="text-gray-600 text-sm">Building and deploying deep learning models for medical image segmentation, focusing on kidney blood vessel analysis using PyTorch and computer vision techniques</p>
                </div>
                <span className="text-gray-500 text-sm font-medium whitespace-nowrap">Oct 2024 - Present</span>
              </div>
            </div>

            {/* Experience Item 2 - Working Holiday */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Working Holiday - Australia</h3>
                  <p className="text-blue-600 font-medium mb-1">Australia</p>
                  <p className="text-gray-600 text-sm">Developed software and data analysis tools; also held operational roles in snowmaking and wastewater treatment</p>
                </div>
                <span className="text-gray-500 text-sm font-medium whitespace-nowrap">Mar 2023 - Jun 2025</span>
              </div>
            </div>

            {/* Experience Item 3 - RedSalud */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Regional Operations Coordinator</h3>
                  <p className="text-blue-600 font-medium mb-1">RedSalud CCHC, Chile</p>
                  <p className="text-gray-600 text-sm">Led data-driven operational analysis and optimization initiatives across multiple regional healthcare clinics, identifying efficiency improvements and implementing process enhancements</p>
                </div>
                <span className="text-gray-500 text-sm font-medium whitespace-nowrap">Jun 2022 - Dec 2022</span>
              </div>
            </div>

            {/* Experience Item 4 - Crystal Lagoons */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Technical Supervisor</h3>
                  <p className="text-blue-600 font-medium mb-1">Crystal Lagoons, Chile</p>
                  <p className="text-gray-600 text-sm">Managed operations across 6 lagoon facilities and developed automated Salesforce dashboards that streamlined reporting and improved decision-making processes</p>
                </div>
                <span className="text-gray-500 text-sm font-medium whitespace-nowrap">Sep 2019 - Dec 2021</span>
              </div>
            </div>
          </div>
          
          {/* Download CV Button */}
          <div className="mt-8 text-center">
            <a 
              href="/resume.pdf" 
              download="Tomas_Urizar_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Education</h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Industrial Civil Engineering</h3>
                <p className="text-blue-600 font-medium">Adolfo Ibáñez University, Chile</p>
              </div>
              <span className="text-gray-500 text-sm font-medium whitespace-nowrap">2014 - 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
          
          {/* Projects grid - Personal projects first (with links), then NDA projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Personal Projects - Can show code */}
            
            {/* Project 1 - Kidney Blood Vessel Segmentation */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-200 hover:border-t-2 hover:border-blue-500 group cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 min-h-[3rem] group-hover:text-blue-600 transition-colors">Kidney Blood Vessel Segmentation</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Web app for automated blood vessel segmentation in kidney images. U-Net in PyTorch, ONNX for inference, FastAPI + React. Dice 0.88.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">PyTorch</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">U-Net</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">FastAPI</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">React</span>
              </div>
              <div className="flex gap-4 min-h-[1.75rem] items-center flex-wrap">
                <a href="/projects/kidney-segmentation" className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors">
                  View Details →
                </a>
                <a href="https://miraiengineering.substack.com/p/automated-blood-vessel-segmentation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors">
                  Article →
                </a>
              </div>
            </div>

            {/* Project 2 - Web Development */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-200 hover:border-t-2 hover:border-blue-500 group cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 min-h-[3rem] group-hover:text-blue-600 transition-colors">Cabin Resort Website</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Responsive, multi-page website for a cabin resort in southern Chile. Built with HTML, CSS, and JavaScript; 
                deployed and maintained via web hosting.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">HTML</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">CSS</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">JavaScript</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Web Hosting</span>
              </div>
              <div className="flex gap-4 min-h-[1.75rem] items-center">
                <a href="https://vuelodegaviotas.cl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors">
                  Visit Website →
                </a>
              </div>
            </div>

            {/* NDA Projects - Cannot show code */}
            
            {/* Project 3 - Tennis Court Reservation Automation */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-200 hover:border-t-2 hover:border-blue-500 group cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 min-h-[3rem] group-hover:text-blue-600 transition-colors">Tennis Court Reservation Automation</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Automated tennis court reservation system that ensures bookings are made as soon as courts become available, 
                automatically generating a reservation for the desired time slot.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Python</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Web Scraping</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Automation</span>
              </div>
              <div className="min-h-[1.75rem]"></div>
            </div>

            {/* Project 4 - Gas Consumption Tracker */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-200 hover:border-t-2 hover:border-blue-500 group cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 min-h-[3rem] group-hover:text-blue-600 transition-colors">AI-Powered Gas Consumption Tracker</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Full-stack web app: upload meter photos for AI-powered readings and track consumption with analytics. 
                Built with Supabase backend and deployed on Vercel.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Img Vision</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Supabase</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Vercel</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Web App</span>
              </div>
              <div className="flex gap-4 min-h-[1.75rem] items-center">
                <a href="/projects/gas-consumption-tracker" className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors">
                  View Details →
                </a>
                <a href="https://gas-consumption-tracker-v2.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors">
                  Try →
                </a>
              </div>
            </div>

            {/* Project 5 - Voice-Text Agent */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-200 hover:border-t-2 hover:border-blue-500 group cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 min-h-[3rem] group-hover:text-blue-600 transition-colors">Voice-Text Agent</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Voice and text processing agent enabling seamless bidirectional conversion 
                between speech and text with natural language understanding and intelligent processing.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Python</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Speech Recognition</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">TTS</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Streamlit</span>
              </div>
              <div className="flex gap-4 min-h-[1.75rem] items-center">
                <a href="/projects/voice-text-agent" className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors">
                  View Details →
                </a>
                <a href="https://voice-text-agent-fvnaaf3l7t7viffhzxurln.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors">
                  Try →
                </a>
              </div>
            </div>

            {/* Project 6 - Portfolio Website */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-200 hover:border-t-2 hover:border-blue-500 group cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 min-h-[3rem] group-hover:text-blue-600 transition-colors">Portfolio Website</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. Showcases projects, experience, and skills 
                with a clean UI; deployable to Vercel.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap min-h-[1.5rem] mt-auto">
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Next.js</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">TypeScript</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">Tailwind CSS</span>
                <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded">UI/UX</span>
              </div>
              <div className="min-h-[1.75rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          
          {/* Contact info - shown first */}
          <div className="mb-8 text-center">
            <div className="text-gray-700 mb-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <p>Email: <a href="mailto:tomasurizark@gmail.com" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors font-medium">tomasurizark@gmail.com</a></p>
              <p>Phone: <a href="tel:+4915221467163" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors font-medium">+49 152 21467163</a></p>
              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/tomas-ignacio-urizar-kleinknecht-28430b187/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Form - Simple and clean */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form 
              action="https://formsubmit.co/tomasurizark@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden fields for FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New contact from portfolio website" />
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Your Email"
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Tomas Urizar Kleinknecht. All rights reserved.</p>
      </footer>
    </main>
  )
}

