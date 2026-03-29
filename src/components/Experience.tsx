import { Briefcase, Calendar, FileText, ExternalLink, Globe } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Founding Engineer',
      company: 'Bid Engine',
      period: 'March 2026 – Present',
      description: [
        'Architected UI/UX overhaul with React/TypeScript and PostgreSQL backend, onboarding early-adopting vendors across GTA',
        'Optimized PDF parsing pipeline with Python and LLM-powered subagent, improving processing speed by 70%',
        'Deployed containerized services with Docker on AWS EC2, implementing CI/CD pipeline via GitHub Actions',
        'Integrated Kafka event streaming for real-time pricing updates with Redis caching optimization',
      ],
      companyLink: 'https://www.bidengine.ca',
    },
    {
      title: 'Co-Founder & Founding Engineer',
      company: 'Stealth Startup',
      period: 'Dec 2025 – Feb 2026',
      description: [
        'Architected multi-agent AI system with Python/LangGraph orchestration, reducing manual prospecting by 80%+',
        'Engineered full backend with PostgreSQL, RESTful APIs and async task queues, shipping production web app',
        'Built discovery and outreach scoring system with Flask APIs and Redis caching',
        'Secured $500K in funding and accepted into Shanghai incubator validating product-market fit',
      ],
    },
    {
      title: 'Research Intern',
      company: 'University of British Columbia',
      period: 'May 2023 – Apr 2024',
      description: [
        'Published peer-reviewed paper at CHI 2024 on AI agent deception, studying hallucinations and trust',
        'Developed AlphaBetaCity social deduction game with Unity/C# and MongoDB backend',
        'Conducted mixed-methods analysis with Python and PostgreSQL, contributing findings on human perception of AI',
      ],
      paperLink: 'https://programs.sigchi.org/chi/2024/program/content/146790',
    },
    {
      title: 'IT Director & Lead Developer',
      company: 'UBC Sauder CUS',
      period: 'Oct 2022 – Apr 2024',
      description: [
        'Optimized 23 websites improving Lighthouse performance scores by 25%, refactoring with React architecture',
        'Reduced mobile page load time by 18% for 1,000+ users, auditing and removing unused libraries',
        'Architected CI/CD pipeline with GitHub Actions and Docker, leading Agile sprints with teams',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-primary-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white/60 dark:bg-primary-800/60 backdrop-blur-sm border border-primary-200 dark:border-primary-700 rounded-xl p-6 md:p-8 hover:bg-white dark:hover:bg-primary-800 hover:border-accent-600 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="flex-shrink-0 p-3 bg-accent-100 dark:bg-primary-700 rounded-lg group-hover:bg-accent-600 dark:group-hover:bg-primary-600 transition-colors">
                    <Briefcase className="w-5 h-5 text-accent-600 dark:text-primary-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary-900 dark:text-white">
                      {exp.title}
                    </h3>
                    {exp.companyLink ? (
                      <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="text-accent-600 dark:text-accent-400 font-semibold hover:text-accent-700 dark:hover:text-accent-300 inline-flex items-center transition-colors">
                        {exp.company}
                        <Globe className="ml-1.5 w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <p className="text-accent-600 dark:text-accent-400 font-semibold">
                        {exp.company}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm md:ml-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 md:ml-16">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-primary-700 dark:text-primary-300 flex items-start">
                    <span className="text-accent-600 dark:text-accent-400 mr-2">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              {exp.paperLink && (
                <div className="mt-4 md:ml-16">
                  <a
                    href={exp.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-600 dark:text-primary-300 hover:text-accent-700 dark:hover:text-white font-semibold text-sm transition-colors"
                  >
                    <FileText className="mr-2" size={16} />
                    View Publication
                    <ExternalLink className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
