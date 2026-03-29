import { ExternalLink, Github, Award, Globe, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const useGitHubStars = (repos: { owner: string; repo: string }[]) => {
  const [stars, setStars] = useState<Record<string, number | null>>({})

  useEffect(() => {
    repos.forEach(({ owner, repo }) => {
      fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then(res => res.json())
        .then(data => {
          if (typeof data.stargazers_count === 'number') {
            setStars(prev => ({ ...prev, [`${owner}/${repo}`]: data.stargazers_count }))
          }
        })
        .catch(() => {})
    })
  }, [])

  return stars
}

const Projects = () => {
  const starRepos = [
    { owner: 'FelixNg1022', repo: 'cf_ai_code_review' },
    { owner: 'FelixNg1022', repo: 'JobMatch-AI' },
  ]
  const stars = useGitHubStars(starRepos)

  const projects = [
    {
      title: 'AI Code Review Assistant',
      description: 'End-to-end AI code review product supporting 12 languages with GitHub OAuth, session persistence via Durable Objects, and sub-200ms response times on Cloudflare Workers.',
      tech: ['TypeScript', 'React', 'Cloudflare Workers', 'Durable Objects', 'PostgreSQL'],
      github: 'https://github.com/FelixNg1022/cf_ai_code_review',
      live: 'https://cf-ai-code-review-frontend.pages.dev',
      starKey: 'FelixNg1022/cf_ai_code_review',
    },
    {
      title: 'JobMatch AI',
      description: 'AI-powered job matching agent using LLaMA that analyzes resumes with semantic matching, pre-filters across 40+ job boards reducing API costs by 70%+, and achieves sub-200ms response times on AWS Lambda.',
      tech: ['TypeScript', 'Deno', 'Groq', 'LLaMA', 'Tavily', 'AWS Lambda'],
      github: 'https://github.com/FelixNg1022/JobMatch-AI',
      featured: true,
      starKey: 'FelixNg1022/JobMatch-AI',
    },
    {
      title: 'RoastMySubs',
      description: 'Chrome extension that connects to your bank via Plaid to detect subscription spending, featuring an AI-powered flame mascot that roasts your unused subscriptions using Google Gemini.',
      tech: ['TypeScript', 'HTML', 'JavaScript', 'Plaid', 'Gemini'],
      github: 'https://github.com/promatty/nw-hacks2026',
    },
    {
      title: 'Schedulii',
      description: 'Full-stack event-planning platform with Google Calendar integration, Redis caching improving query speed by 60%, Kafka streaming for sub-100ms notifications, handling 10K+ daily requests on AWS.',
      tech: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Redis', 'Kafka'],
      github: 'https://github.com/FelixNg1022/schedulii',
    },
    {
      title: 'Presently',
      description: 'Presentation coach that uses Azure Video Indexer, Livepeer, OpenCV, and Mediapipe for real-time emotion detection, speech analysis, and eye-contact training.',
      tech: ['React', 'Flask', 'Python', 'Azure', 'Firebase'],
      github: 'https://github.com/bennypc/nwHacks-2023',
      award: 'Livepeer Best Overall',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/60 dark:bg-primary-900/60 backdrop-blur-sm border rounded-xl p-6 hover:bg-white dark:hover:bg-primary-800 hover:shadow-xl transition-all duration-200 ${
                project.featured ? 'border-accent-600 dark:border-primary-500' : 'border-primary-200 dark:border-primary-700 hover:border-accent-600 dark:hover:border-primary-500'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-bold text-primary-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  {project.starKey && stars[project.starKey] != null && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {stars[project.starKey]}
                    </span>
                  )}
                  {project.award && (
                    <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
                  )}
                </div>
              </div>

              <p className="text-primary-700 dark:text-primary-300 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-accent-100 dark:bg-primary-700 text-accent-700 dark:text-primary-300 text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-600 text-primary-700 dark:text-primary-200 text-xs rounded-md font-medium">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-600 dark:text-primary-300 hover:text-accent-700 dark:hover:text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    <Github className="mr-2" size={16} />
                    View Code
                    <ExternalLink className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-600 dark:text-primary-300 hover:text-accent-700 dark:hover:text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    <Globe className="mr-2" size={16} />
                    Live Demo
                    <ExternalLink className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/felixng1022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-900 dark:bg-primary-700 text-white rounded-xl hover:bg-primary-800 dark:hover:bg-primary-600 transition-all duration-200 font-semibold cursor-pointer"
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
