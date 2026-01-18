import { Code, Cpu, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'AI & ML',
      description: 'Building intelligent systems with Zypher, LLMs, and modern AI frameworks',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'HCI Research',
      description: 'Studied player perception and trust dynamics in video game interactions',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Production Systems',
      description: 'Maintained real systems at UBC Sauder CUS serving thousands of students',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            About
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm border border-primary-200 rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-lg text-primary-700 leading-relaxed mb-6">
            I'm a Computer Science and Business student in Vancouver pursuing my first Software Engineering internship, with interests in AI agents, machine learning–powered applications, and full-stack web development. I have contributed to an HCI research project exploring player perceptions of deception in video games by designing and analyzing NPC behavior around trust and intention. Previously, I supported real production systems as part of the IT team for a large student organization, gaining experience beyond side projects. I enjoy building and debugging user-focused software and seek an in-person or hybrid role with strong mentorship, real feature ownership, and long-term growth in Vancouver or California’s tech ecosystem.
            </p>
            <p className="text-lg text-primary-700 leading-relaxed">
              Seeking my first <span className="font-semibold text-accent-600">Software Engineering internship</span> in
              Vancouver to work with experienced engineers and contribute to real features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm border border-primary-200 rounded-xl p-6 hover:bg-white hover:border-accent-600 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-accent-100 rounded-lg mb-4 group-hover:bg-accent-600 transition-colors">
                  <div className="text-accent-600 group-hover:text-white transition-colors">{item.icon}</div>
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
