const Skills = () => {
  const skillCategories = [
    {
      category: 'AI & ML',
      skills: ['Zypher', 'Groq', 'OpenAI', 'LLMs', 'RxJS'],
    },
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Go', 'SQL'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Deno', 'Express', 'Flask', 'REST APIs'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    },
    {
      category: 'Tools & Methods',
      skills: ['Git', 'Agile/Scrum', 'System Design', 'HCI'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Skills
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-primary-200 rounded-xl p-6 hover:bg-white hover:border-accent-600 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="font-display text-lg font-bold text-primary-900 mb-4 pb-2 border-b-2 border-accent-600">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-accent-50 text-accent-700 text-sm rounded-lg hover:bg-accent-100 transition-colors cursor-default"
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
