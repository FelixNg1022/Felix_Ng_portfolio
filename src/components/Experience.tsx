import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'HCI Research Contributor',
      company: 'University of British Columbia',
      period: 'May 2023 – Apr 2024',
      description: [
        'Studied player perception of lying and deception in video games',
        'Analyzed 29 players\' behavior focusing on trust dynamics',
      ],
    },
    {
      title: 'IT Director & Lead Developer',
      company: 'UBC Sauder CUS',
      period: 'Apr 2023 – Apr 2024',
      description: [
        'Maintained production systems serving thousands of students',
        'Improved 23 websites - 25% better Lighthouse scores, 18% faster load times',
        'Led Agile/Scrum sprints and supported 1000+ users',
      ],
    },
    {
      title: 'IT Associate & Developer',
      company: 'UBC Sauder CUS',
      period: 'Oct 2022 – Apr 2023',
      description: [
        'Developed and maintained web applications',
        'Gained production systems and user support experience',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-sm border border-primary-200 rounded-xl p-6 md:p-8 hover:bg-white hover:border-accent-600 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="flex-shrink-0 p-3 bg-accent-100 rounded-lg group-hover:bg-accent-600 transition-colors">
                    <Briefcase className="w-5 h-5 text-accent-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary-900">
                      {exp.title}
                    </h3>
                    <p className="text-accent-600 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-primary-600 text-sm md:ml-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 md:ml-16">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-primary-700 flex items-start">
                    <span className="text-accent-600 mr-2">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
