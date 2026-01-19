import { GraduationCap, BookOpen } from 'lucide-react'

const Education = () => {
  const courses = [
    'Data Structures & Algorithms',
    'OOP in Java',
    'Relational Databases',
    'Computer Systems',
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 dark:bg-primary-900/60 backdrop-blur-sm border border-primary-200 dark:border-primary-700 rounded-2xl p-8 md:p-12 hover:bg-white dark:hover:bg-primary-800 hover:border-accent-600 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 p-4 bg-accent-600 dark:bg-primary-600 rounded-xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-900 dark:text-white mb-2">
                  University of British Columbia
                </h3>
                <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-2">
                  BSc Computer Science + Business
                </p>
                <p className="text-primary-600 dark:text-primary-400 mb-6">
                  Vancouver, BC • Graduating May 2027
                </p>

                <div className="bg-white/60 dark:bg-primary-800/60 backdrop-blur-sm border border-primary-200 dark:border-primary-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-5 h-5 text-accent-600 dark:text-accent-400 mr-3" />
                    <h4 className="font-display text-base font-semibold text-primary-900 dark:text-white">
                      Key Coursework
                    </h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {courses.map((course, index) => (
                      <div key={index} className="flex items-start text-primary-700 dark:text-primary-300 text-sm">
                        <span className="text-accent-600 dark:text-accent-400 mr-2">•</span>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
