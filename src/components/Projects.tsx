import { ExternalLink, Github, Award } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'JobMatch AI',
      description: 'AI agent that automates job matching using Zypher framework, analyzing resumes and providing fit scores with personalized suggestions.',
      tech: ['TypeScript', 'Deno', 'Zypher', 'Groq API', 'RxJS'],
      github: 'https://github.com/FelixNg1022/JobMatch-AI',
      featured: true,
    },
    {
      title: 'Presently',
      description: 'Presently is a web app that utilizes Azure Video Indexer, Livepeer, OpenCV, and Mediapipe to bring you the best user experience and features such as sentimental emotion detection, speech-to-text analysis, and eye-contact trainer.',
      tech: ['React', 'Flask', 'Python', 'Azure', 'Firebase'],
      github: 'https://github.com/bennypc/nwHacks-2023',
      award: 'Livepeer Best Overall',
    },
    {
      title: 'Schedulii',
      description: 'Event-planning app with Google Calendar integration, deployed on AWS with Kubernetes.',
      tech: ['React', 'TypeScript', 'PostgreSQL', 'Go', 'AWS', 'Redis'],
      github: 'https://github.com/lou-weng/schedulii',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/60 backdrop-blur-sm border rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-200 ${
                project.featured ? 'border-accent-600' : 'border-primary-200 hover:border-accent-600'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-bold text-primary-900">
                  {project.title}
                </h3>
                {project.award && (
                  <Award className="w-5 h-5 text-yellow-600" />
                )}
              </div>

              <p className="text-primary-700 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md font-medium">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold text-sm transition-colors group cursor-pointer"
                >
                  <Github className="mr-2" size={16} />
                  View Code
                  <ExternalLink className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/felixng1022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-900 text-white rounded-xl hover:bg-primary-800 transition-all duration-200 font-semibold cursor-pointer"
          >
            <Github className="mr-2" size={20} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
