const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Java', 'C/C++', 'SQL', 'R', 'HTML', 'CSS'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'Responsive Design'],
    },
    {
      category: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'Flask', 'Gin', 'REST APIs', 'GraphQL', 'OAuth 2.0', 'JWT'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Cloudflare Workers', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
    },
    {
      category: 'Databases & Messaging',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Kafka', 'RabbitMQ'],
    },
    {
      category: 'AI/ML & Tools',
      skills: ['LangGraph', 'LLM Orchestration', 'Prompt Engineering', 'LLaMA', 'Groq', 'MCP'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-primary-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-primary-800/60 backdrop-blur-sm border border-primary-200 dark:border-primary-700 rounded-xl p-6 hover:bg-white dark:hover:bg-primary-800 hover:border-accent-600 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="font-display text-lg font-bold text-primary-900 dark:text-white mb-4 pb-2 border-b-2 border-accent-600 dark:border-primary-500">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-accent-50 dark:bg-primary-700 text-accent-700 dark:text-primary-300 text-sm rounded-lg hover:bg-accent-100 dark:hover:bg-primary-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
