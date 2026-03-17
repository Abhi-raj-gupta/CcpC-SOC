import React from 'react';
import { Github, ExternalLink, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time notifications.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      team: ['Rahul Kumar', 'Priya Singh', 'Arjun Patel'],
      season: 'Summer Project',
      image: '🛒',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team assignments, and progress tracking.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      team: ['Sarah Johnson', 'Mike Chen'],
      season: 'Summer Project',
      image: '✓',
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'Intelligent chatbot powered by NLP, capable of understanding context and providing smart responses.',
      tech: ['Python', 'NLP', 'FastAPI', 'React'],
      team: ['Aditya Sharma', 'Lisa Wang', 'David Lee'],
      season: 'Summer Project',
      image: '🤖',
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.',
      tech: ['Flutter', 'Firebase', 'Google Fit API'],
      team: ['Emma Thompson', 'James Wilson'],
      season: 'Summer Project',
      image: '💪',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with scheduling and reporting features.',
      tech: ['React', 'Django', 'PostgreSQL', 'Chart.js'],
      team: ['Omar Hassan', 'Zara Khan', 'Nikhil Gupta'],
      season: 'Summer Project',
      image: '📊',
    },
    {
      id: 6,
      title: 'Quiz Platform',
      description: 'Interactive online quiz platform with leaderboards, real-time scoring, and certificate generation.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      team: ['Nina Patel', 'Kevin Brown'],
      season: 'Summer Project',
      image: '❓',
    },
  ];

  const categories = [
    { name: 'All Projects', count: 50 },
    { name: 'Web Apps', count: 30 },
    { name: 'Mobile Apps', count: 12 },
    { name: 'AI/ML', count: 8 },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-slideUp">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Amazing <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the incredible projects built by our community during Seasons of Code. From web apps to AI solutions, see what our talented developers have created.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center animate-slideUp">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  idx === 0
                    ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden card-hover animate-slideUp shadow-md"
                style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-7xl">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-400 mb-2 uppercase">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-gray-700 text-primary-700 dark:text-primary-400 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team */}
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{project.team.length} Members</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.team.map((member, idx) => (
                        <span key={idx} className="text-xs text-gray-500 dark:text-gray-500">
                          {idx > 0 && '·'} {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Season Badge */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-gray-700 dark:to-gray-600 text-primary-700 dark:text-primary-400 text-xs font-semibold rounded-full">
                      {project.season}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-100 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <button className="flex-1 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '200+', label: 'Students Involved' },
              { number: '15+', label: 'Categories' },
              { number: '10k+', label: 'Lines of Code' },
            ].map((stat, index) => (
              <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Have an Awesome Project Idea?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join our next season and bring your ideas to life with a team of passionate developers.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Start Building Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
