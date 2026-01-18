import { Mail, Phone, Linkedin, Github, MapPin, ArrowRight } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'FelixNg1022@gmail.com',
      href: 'mailto:FelixNg1022@gmail.com',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'felixng1022',
      href: 'https://www.linkedin.com/in/felixng1022/',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'felixng1022',
      href: 'https://github.com/felixng1022',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Vancouver, BC',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Contact
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto mb-6"></div>
          <p className="text-lg text-primary-700 max-w-2xl mx-auto">
            Open to internship opportunities and collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-primary-200 rounded-xl p-6 hover:bg-white hover:border-accent-600 hover:shadow-lg transition-all duration-200"
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 p-3 bg-accent-100 rounded-lg group-hover:bg-accent-600 transition-colors">
                      <div className="text-accent-600 group-hover:text-white transition-colors">{contact.icon}</div>
                    </div>
                    <div>
                      <p className="text-xs text-primary-600 font-medium uppercase tracking-wide">
                        {contact.label}
                      </p>
                      <p className="text-base text-primary-900 font-semibold group-hover:text-accent-600 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-3 bg-accent-100 rounded-lg">
                      <div className="text-accent-600">{contact.icon}</div>
                    </div>
                    <div>
                      <p className="text-xs text-primary-600 font-medium uppercase tracking-wide">
                        {contact.label}
                      </p>
                      <p className="text-base text-primary-900 font-semibold">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/60 backdrop-blur-sm border border-primary-200 rounded-2xl p-10 hover:bg-white hover:border-accent-600 hover:shadow-lg transition-all duration-200">
            <h3 className="font-display text-2xl font-bold text-primary-900 mb-4">
              Seeking Software Engineering Internship
            </h3>
            <p className="text-primary-700 mb-8 max-w-xl mx-auto">
              Looking for in-person or hybrid opportunities in Vancouver to work with experienced teams
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:FelixNg1022@gmail.com"
                className="group inline-flex items-center justify-center px-8 py-4 bg-accent-600 text-white rounded-xl font-semibold hover:bg-accent-700 transition-all duration-200 cursor-pointer"
              >
                Send Email
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/felixng1022/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/60 backdrop-blur-sm border border-primary-300 text-primary-900 rounded-xl font-semibold hover:bg-white hover:border-accent-600 transition-all duration-200 cursor-pointer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
