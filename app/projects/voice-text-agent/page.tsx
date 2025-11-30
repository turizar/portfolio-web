import Link from 'next/link'
import Image from 'next/image'

export default function VoiceTextAgentProject() {
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
                Voice-Text Agent
              </h1>
              
              <p className="text-lg text-gray-700 mb-6">
                AI-powered agent that processes voice and text inputs, enabling seamless conversion 
                between speech and text with intelligent processing and natural language understanding.
              </p>
              
              <div className="flex gap-2 flex-wrap mb-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Streamlit</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TTS</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Speech Recognition</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PyTorch</span>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-lg h-64 bg-gray-50">
              <Image
                src="/projects/voice-text-agent/speech_to_text.png"
                alt="Voice-Text Agent application interface"
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
              The Voice-Text Agent is an intelligent application that bridges the gap between voice and text 
              communication. Built with advanced AI and natural language processing capabilities, it enables 
              seamless conversion and intelligent processing of both voice and text inputs.
            </p>
            <p>
              This project demonstrates the integration of speech recognition, text processing, and AI-powered 
              understanding to create a versatile tool for various applications, from transcription services 
              to intelligent conversation agents.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice Input Processing</h3>
              <p className="text-gray-600 text-sm">
                Capture and process voice inputs with advanced speech recognition technology, 
                converting spoken words into text with high accuracy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Text Processing</h3>
              <p className="text-gray-600 text-sm">
                Intelligent text analysis and processing using natural language understanding 
                to extract meaning and context from written input.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Understanding</h3>
              <p className="text-gray-600 text-sm">
                Leverage machine learning models to understand context, intent, and generate 
                intelligent responses or actions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Conversion</h3>
              <p className="text-gray-600 text-sm">
                Bidirectional conversion between voice and text formats, enabling flexible 
                communication modes for different use cases.
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
            {['Python', 'Streamlit', 'TTS', 'Speech Recognition', 'PyTorch', 'Google Speech Recognition'].map((tech) => (
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
              href="https://voice-text-agent-fvnaaf3l7t7viffhzxurln.streamlit.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center border border-gray-200 hover:border-blue-400"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Demo</h3>
              <p className="text-sm text-gray-600 mb-4">Try the application</p>
              <div className="text-blue-600 font-medium text-sm">Try Demo →</div>
            </a>
            
            <a 
              href="https://github.com/turizar/voice-text-agent" 
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
              The Voice-Text Agent successfully demonstrates the integration of modern AI technologies 
              for voice and text processing. The application showcases practical applications of natural 
              language processing and speech recognition in creating user-friendly interfaces.
            </p>
            <p>
              This project highlights the potential of combining multiple AI technologies to create 
              versatile tools that can adapt to different communication modes and user preferences. 
              The seamless conversion between voice and text opens up possibilities for various 
              applications in accessibility, productivity, and human-computer interaction.
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

