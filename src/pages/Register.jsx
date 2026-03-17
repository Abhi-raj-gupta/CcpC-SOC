import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    skills: [],
    interests: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const branches = [
    'Computer Science',
    'Information Technology',
    'Electronics & Communication',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Other',
  ];

  const skillOptions = [
    'Web Development',
    'App Development',
    'Data Science',
    'AI/ML',
    'Competitive Programming',
    'Cloud Computing',
    'DevOps',
    'Database Design',
  ];

  const interestOptions = [
    'Summer Project',
    'Autumn Challenge',
    'Mentorship',
    'Hackathons',
    'Workshops',
    'Networking',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        branch: '',
        skills: [],
        interests: [],
      });
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-slideUp">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Join <span className="gradient-text">Seasons of Code</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Registration is simple and takes just a few minutes. Fill out the form below and start your coding journey!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-12 animate-slideUp">
            {submitted && (
              <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl flex items-start space-x-4 animate-slideUp">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 dark:text-green-300 mb-2">Registration Successful!</h3>
                  <p className="text-green-800 dark:text-green-400">Thank you for registering. We'll send you more details via email soon!</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="animate-slideUp" style={{ animationDelay: '0.15s' }}>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                />
              </div>

              {/* Branch */}
              <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">Branch/Department *</label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-primary-600 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select your branch</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>

              {/* Skills */}
              <div className="animate-slideUp" style={{ animationDelay: '0.25s' }}>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-4">Your Skills *</label>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Select at least one skill</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skillOptions.map((skill) => (
                    <label key={skill} className="flex items-center space-x-3 p-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-700 rounded-lg cursor-pointer hover:border-primary-600 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-600 transition-all">
                      <input
                        type="checkbox"
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleCheckboxChange('skills', skill)}
                        className="w-5 h-5 text-primary-600 rounded focus:ring-2 focus:ring-primary-600"
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
                <label className="block text-sm font-bold text-gray-900 dark:text-white mb-4">Interests *</label>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Select what you're interested in</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <label key={interest} className="flex items-center space-x-3 p-3 border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-700 rounded-lg cursor-pointer hover:border-accent-500 dark:hover:border-accent-400 hover:bg-amber-50 dark:hover:bg-gray-600 transition-all">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleCheckboxChange('interests', interest)}
                        className="w-5 h-5 text-accent-500 rounded focus:ring-2 focus:ring-accent-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <div className="animate-slideUp" style={{ animationDelay: '0.35s' }}>
                <label className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                  <input
                    type="checkbox"
                    required
                    className="w-5 h-5 text-primary-600 rounded focus:ring-2 focus:ring-primary-600 mt-1 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    I agree to the terms and conditions and consent to receive updates about Seasons of Code
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg"
                >
                  Register Now
                </button>
              </div>

              {/* Help Text */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Questions? <a href="/contact" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">Contact us</a>
                </p>
              </div>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'What Happens Next?',
                description: 'After registration, you\'ll receive a confirmation email with further details about which season to join.'
              },
              {
                title: 'When Does It Start?',
                description: 'Summer Projects start in June, while Autumn Challenges begin in October. Both are open year-round.'
              },
              {
                title: 'Do I Need Experience?',
                description: 'Nope! Beginners to experts welcome. We have mentorship and resources for all skill levels.'
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl card-hover animate-slideUp"
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
