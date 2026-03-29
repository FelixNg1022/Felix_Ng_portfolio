import { Code, Cpu, Users, ExternalLink } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Startup Builder',
      description: 'Founding engineer shipping production software at early-stage startups with real users',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'CHI 2024 Published',
      description: 'Peer-reviewed research on AI agent deception and trust at the premier HCI conference',
      link: 'https://programs.sigchi.org/chi/2024/program/content/146790',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'AWS Certified',
      description: 'Cloud Practitioner certified, experienced with EC2, S3, Lambda, RDS, and more',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            About
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 dark:bg-primary-900/60 backdrop-blur-sm border border-primary-200 dark:border-primary-700 rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-lg text-primary-700 dark:text-primary-300 leading-relaxed mb-6">
              I'm a Computer Science and Business student at UBC with hands-on startup experience as a founding engineer. Currently at Bid Engine, I architect full-stack systems with React, TypeScript, and AWS while optimizing AI-powered document processing pipelines. Previously, I co-founded an AI-powered influencer marketing startup where I built multi-agent systems with LangGraph and shipped a production web app that helped secure $500K in funding.
            </p>
            <p className="text-lg text-primary-700 dark:text-primary-300 leading-relaxed">
              I've published peer-reviewed research at <span className="font-semibold text-accent-600 dark:text-accent-400">CHI 2024</span> on AI trust and deception, and I'm actively seeking <span className="font-semibold text-accent-600 dark:text-accent-400">Software Engineering internships</span> to work with experienced teams and continue growing as an engineer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const CardWrapper = item.link ? 'a' : 'div'
              const linkProps = item.link ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' } : {}
              return (
                <CardWrapper
                  key={index}
                  {...linkProps}
                  className={`group bg-white/60 dark:bg-primary-900/60 backdrop-blur-sm border border-primary-200 dark:border-primary-700 rounded-xl p-6 hover:bg-white dark:hover:bg-primary-800 hover:border-accent-600 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200 ${item.link ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-primary-700 rounded-lg mb-4 group-hover:bg-accent-600 dark:group-hover:bg-primary-600 transition-colors">
                    <div className="text-accent-600 dark:text-primary-300 group-hover:text-white transition-colors">{item.icon}</div>
                  </div>
                  <div className="flex items-center mb-2">
                    <h3 className="font-display text-lg font-semibold text-primary-900 dark:text-white">
                      {item.title}
                    </h3>
                    {item.link && (
                      <ExternalLink className="ml-2 w-4 h-4 text-accent-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 text-sm">{item.description}</p>
                </CardWrapper>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
