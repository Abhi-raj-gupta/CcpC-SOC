import React from 'react';
import { Calendar, Users, Trophy, Code, Cpu } from 'lucide-react';

const Seasons = () => {
  const seasons = [
    {
      id: 1,
      title: 'Summer Project',
      subtitle: 'Build Something Amazing',
      duration: 'June - July',
      weeks: 8,
      color: 'from-orange-400 to-red-500',
      icon: <Code className="w-8 h-8" />,
      highlights: [
        'Group Projects (2-4 members)',
        'Expert Mentorship',
        'Weekly Workshops',
        'Code Reviews & Feedback',
        'Final Presentations',
      ],
      description: 'Collaborate with teammates to build full-fledged projects under the guidance of experienced mentors. Work on ideas that matter and create something you\'re proud of.',
      stats: [
        { label: 'Duration', value: '8 Weeks' },
        { label: 'Team Size', value: '2-4 People' },
        { label: 'Projects', value: '50+' },
      ],
    },
    {
      id: 2,
      title: 'Autumn Coding Challenge',
      subtitle: 'Compete & Win Prizes',
      duration: 'October - November',
      weeks: 6,
      color: 'from-purple-500 to-pink-500',
      icon: <Trophy className="w-8 h-8" />,
      highlights: [
        'Biweekly Contests',
        'Individual or Team Participation',
        'Competitive Leaderboards',
        'Exciting Prizes & Recognition',
        'Real-world Problem Solving',
      ],
      description: 'Test your competitive coding skills in a series of challenging contests. Compete with peers, climb the leaderboards, and win exciting prizes while sharpening your algorithmic thinking.',
      stats: [
        { label: 'Duration', value: '6 Weeks' },
        { label: 'Contests', value: 'Biweekly' },
        { label: 'Prizes', value: 'Worth ₹50k+' },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-slideUp">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Seasons</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Two distinct programming seasons, each offering unique opportunities to learn, collaborate, and compete.
          </p>
        </div>
      </section>

      {/* Seasons Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {seasons.map((season, index) => (
              <div
                key={season.id}
                className="animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${season.color} p-8 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{season.title}</h2>
                        <p className="text-lg opacity-90">{season.subtitle}</p>
                      </div>
                      <div className="text-4xl">{season.icon}</div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="w-5 h-5" />
                      <span>{season.duration}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {season.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                      {season.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4">What's Included:</h3>
                      <ul className="space-y-3">
                        {season.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${season.color}`}></div>
                            <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-8 pb-8">
                    <button className={`w-full py-3 px-6 bg-gradient-to-r ${season.color} text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Join Seasons of Code?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-primary-600 dark:text-primary-400" />,
                title: 'Community',
                description: 'Connect with passionate developers and build lasting friendships.'
              },
              {
                icon: <Cpu className="w-10 h-10 text-accent-500 dark:text-accent-400" />,
                title: 'Skill Development',
                description: 'Enhance your coding and problem-solving abilities through hands-on projects.'
              },
              {
                icon: <Trophy className="w-10 h-10 text-primary-600 dark:text-primary-400" />,
                title: 'Recognition',
                description: 'Get recognized for your achievements and build your professional portfolio.'
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-white dark:bg-gray-900 rounded-xl card-hover animate-slideUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-slideUp">
            Year-Round Schedule
          </h2>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 to-accent-500 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                { month: 'June - July', event: 'Summer Project Season' },
                { month: 'August - September', event: 'Learning & Preparation' },
                { month: 'October - November', event: 'Autumn Coding Challenge' },
                { month: 'December - May', event: 'Community Events & Workshops' },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center animate-slideUp ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="flex-1 md:text-right md:pr-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.event}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{item.month}</p>
                  </div>
                  <div className="hidden md:flex w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full items-center justify-center text-white font-bold relative z-10">
                    {idx + 1}
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seasons;
