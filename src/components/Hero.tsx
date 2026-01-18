import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-primary-50 relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-600 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-400 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm border border-primary-200 rounded-full text-sm font-medium text-primary-700 mb-4">
              CS + Business @ UBC
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-900 mb-4">
              Felix Ng
            </h1>
            <p className="text-xl md:text-2xl text-primary-600 font-medium max-w-xl mb-8">
              Building AI agents & full-stack applications
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/felixng1022"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/60 backdrop-blur-sm border border-primary-200 rounded-xl hover:bg-white hover:border-accent-600 transition-all duration-200 group cursor-pointer"
                aria-label="GitHub"
              >
                <Github size={20} className="text-primary-700 group-hover:text-accent-600 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/felixng1022/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/60 backdrop-blur-sm border border-primary-200 rounded-xl hover:bg-white hover:border-accent-600 transition-all duration-200 group cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-primary-700 group-hover:text-accent-600 transition-colors" />
              </a>
              <a
                href="mailto:FelixNg1022@gmail.com"
                className="p-3 bg-white/60 backdrop-blur-sm border border-primary-200 rounded-xl hover:bg-white hover:border-accent-600 transition-all duration-200 group cursor-pointer"
                aria-label="Email"
              >
                <Mail size={20} className="text-primary-700 group-hover:text-accent-600 transition-colors" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-white/60 backdrop-blur-sm border border-primary-300 text-primary-900 rounded-xl font-semibold hover:bg-white hover:border-accent-600 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                Get In Touch
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white/60 backdrop-blur-sm border border-primary-300 text-primary-900 rounded-xl font-semibold hover:bg-white hover:border-accent-600 transition-all duration-200 cursor-pointer"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right side - Profile photo with glass card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-600 to-accent-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/60 backdrop-blur-lg border border-primary-200 rounded-2xl p-2">
                <img
                  src="/ng.jpeg"
                  alt="Felix Ng"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
