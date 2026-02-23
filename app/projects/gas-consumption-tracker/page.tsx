import Link from 'next/link'
import Image from 'next/image'

export default function GasConsumptionTrackerProject() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Tomas Urizar
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/#about" className="text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/#experience" className="text-gray-700 hover:text-gray-900 transition">
              Experience
            </Link>
            <Link href="/#projects" className="text-gray-700 hover:text-gray-900 transition">
              Projects
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gray-900 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                AI-Powered Gas Consumption Tracker
              </h1>
              
              <p className="text-lg text-gray-700 mb-6">
                Transform your gas monitoring with AI-powered meter reading. Upload photos of your gas meter, 
                get automatic readings, and track consumption with real-time analytics and cost optimization.
              </p>
              
              <div className="flex gap-2 flex-wrap mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AI</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Computer Vision</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Web App</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Analytics</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg h-64 bg-gray-50">
              <Image
                src="/projects/gas-consumption-tracker/upload_gas_consumption.png"
                alt="Gas Consumption Tracker application interface"
                width={600}
                height={400}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              The AI-Powered Gas Consumption Tracker is a web application that revolutionizes how users monitor 
              their gas consumption. By leveraging computer vision and AI, the app automatically extracts meter 
              readings from photos, eliminating the need for manual data entry.
            </p>
            <p>
              Users can upload photos of their gas meter, receive instant AI-powered readings, and track their 
              consumption patterns with beautiful analytics dashboards. The system provides personalized 
              recommendations to optimize gas bills by comparing actual vs expected consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Photo Upload</h3>
              <p className="text-gray-600 text-sm">
                Simply take a photo of your gas meter and let our advanced AI extract readings automatically.
                No manual data entry required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600 text-sm">
                Get instant insights into your gas consumption patterns with beautiful charts and detailed
                analytics dashboard.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Optimization</h3>
              <p className="text-gray-600 text-sm">
                Compare your actual vs expected consumption and receive personalized recommendations to
                optimize your gas bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          
          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'TypeScript', 'AI/ML', 'Computer Vision', 'Python', 'TensorFlow', 'OpenCV', 'Chart.js', 'Vercel'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-md text-sm font-medium border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Demo & Code */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Demo & Code</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://gas-consumption-tracker-v2.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-200 hover:border-blue-400"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Demo</h3>
              <p className="text-sm text-gray-600 mb-4">Try the application</p>
              <div className="text-blue-600 font-medium text-sm">View Demo →</div>
            </a>
            
            <a 
              href="https://github.com/yourusername/gas-consumption-tracker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-200 hover:border-gray-400"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">View Code</h3>
              <p className="text-sm text-gray-600 mb-4">Complete repository on GitHub</p>
              <div className="text-gray-700 font-medium text-sm">View on GitHub →</div>
            </a>
          </div>
        </div>
      </section>

      {/* Conclusions */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusions</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              The AI-Powered Gas Consumption Tracker successfully combines computer vision, AI, and modern 
              web technologies to create a user-friendly solution for gas consumption monitoring. The automatic 
              meter reading feature eliminates manual data entry, while the analytics dashboard provides 
              valuable insights for cost optimization.
            </p>
            <p>
              This project demonstrates the practical application of AI in everyday life, making energy 
              monitoring more accessible and efficient. The combination of real-time analytics and personalized 
              recommendations helps users make informed decisions about their gas consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} Tomas Urizar Kleinknecht.</p>
      </footer>
    </main>
  )
}

