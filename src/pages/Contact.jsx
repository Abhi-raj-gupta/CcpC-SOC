import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 text-primary-600" />,
      title: 'Email',
      content: 'contact@ccpc.edu',
      link: 'mailto:contact@ccpc.edu',
    },
    {
      icon: <Phone className="w-8 h-8 text-accent-500" />,
      title: 'Phone',
      content: '+91 98765 43210',
      link: 'tel:+919876543210',
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary-600" />,
      title: 'Location',
      content: 'University Campus, City Name',
      link: '#',
    },
  ];

  const faqs = [
    {
      question: 'What if I don\'t have any coding experience?',
      answer: 'No problem! Seasons of Code welcomes beginners. We provide mentorship, workshops, and resources to help you get started. You\'ll learn by doing!'
    },
    {
      question: 'Can I participate in both seasons?',
      answer: 'Absolutely! You can participate in both Summer Projects and Autumn Challenges. Many of our top contributors do both.'
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No! Seasons of Code is completely free. We believe in making quality coding opportunities accessible to all students.'
    },
    {
      question: 'What time commitment is required?',
      answer: 'It depends on your season. Summer Projects typically require 10-15 hours per week, while Autumn Challenges require less if you prefer.'
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes! All participants who complete their season receive a certificate of participation. Outstanding contributors get special recognition.'
    },
    {
      question: 'How are teams formed?',
      answer: 'You can form teams with friends or we can help match you with compatible teammates based on your skills and interests.'
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-cyan-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-slideUp">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="p-8 bg-gray-50 rounded-xl card-hover animate-slideUp text-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 hover:text-primary-600 transition-colors">
                  {info.content}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 animate-slideUp">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Send us a Message</h2>
            <p className="text-center text-gray-600 mb-8">
              We typically respond within 24 hours
            </p>

            {submitted && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl flex items-start space-x-4 animate-slideUp">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-green-800">Thank you for reaching out. We'll get back to you soon!</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
                <label className="block text-sm font-bold text-gray-900 mb-3">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="animate-slideUp" style={{ animationDelay: '0.15s' }}>
                <label className="block text-sm font-bold text-gray-900 mb-3">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                />
              </div>

              {/* Subject */}
              <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
                <label className="block text-sm font-bold text-gray-900 mb-3">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="animate-slideUp" style={{ animationDelay: '0.25s' }}>
                <label className="block text-sm font-bold text-gray-900 mb-3">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about Seasons of Code
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-primary-600 transition-colors animate-slideUp"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <details className="group cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-gray-900 hover:text-primary-600 transition-colors">
                    <span>{faq.question}</span>
                    <span className="text-xl group-open:rotate-180 transition-transform">▶</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl opacity-90 mb-8">
            Stop wondering and start coding! Register now to be part of our community.
          </p>
          <a
            href="/register"
            className="inline-block px-10 py-4 bg-white text-primary-600 font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
