import { Globe, Users, Shield, Mail } from 'lucide-react';

export const AboutPage = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'Global Coverage',
      description: 'Bringing you news from every corner of the world, keeping you informed about global events and developments.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Expert Journalists',
      description: 'Our team of experienced journalists ensures accurate, unbiased reporting of news across all categories.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Verified Sources',
      description: 'All our news stories come from reliable, verified sources to maintain the highest standards of journalism.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            About NewsHub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Your trusted source for the latest news and updates from around the world.
            We believe in delivering accurate, timely, and unbiased news coverage.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl 
                       transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <a
              href="mailto:contact@newshub.com"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 
                       text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};