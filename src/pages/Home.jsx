import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Zap, Users } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Code2 className="w-12 h-12 text-primary-600" />,
      title: 'Learn Together',
      description: 'Collaborate with peers and learn from experienced mentors in a supportive community.'
    },
    {
      icon: <Zap className="w-12 h-12 text-accent-500" />,
      title: 'Build Projects',
      description: 'Work on real-world projects that challenge your skills and expand your portfolio.'
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      title: 'Join Competitions',
      description: 'Participate in hackathons and coding challenges with exciting prizes.'
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slideUp">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Seasons of Code</span>
              <span className="block mt-2 gradient-text">SoC</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8">
              Ask <span className="text-primary-600">|</span> Learn <span className="text-accent-500">|</span> Collaborate
            </p>

            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A year-round coding program designed to help students collaborate on projects, compete in challenges, and grow as developers. Whether you're a beginner or experienced, there's something for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/seasons"
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-all duration-300"
              >
                Explore Seasons
              </Link>
            </div>
          </div>

          {/* Illustration placeholder */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-lg mx-auto h-64 sm:h-80 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-6xl">💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What is <span className="gradient-text">Seasons of Code?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Seasons of Code (SoC) is a year-round initiative organized by the Competitive Coding and Programming Club (CcpC) to foster a culture of collaborative learning and competitive coding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl card-hover animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              { number: '500+', label: 'Students' },
              { number: '2', label: 'Seasons' },
              { number: '50+', label: 'Projects' },
              { number: '100%', label: 'Fun' },
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Register now and join a community of passionate coders. Spaces are limited!
          </p>
          <Link
            to="/register"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
