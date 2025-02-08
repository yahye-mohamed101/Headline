import { Globe, Users, Shield, Mail } from 'lucide-react';
import '../assets/AboutPage.css'

export const AboutPage = () => {
  const features = [
    {
      icon: <Globe />,
      title: 'Global Coverage',
      description: 'Bringing you news from every corner of the world, keeping you informed about global events and developments.'
    },
    {
      icon: <Users />,
      title: 'Expert Journalists',
      description: 'Our team of experienced journalists ensures accurate, unbiased reporting of news across all categories.'
    },
    {
      icon: <Shield />,
      title: 'Verified Sources',
      description: 'All our news stories come from reliable, verified sources to maintain the highest standards of journalism.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <div className="about__hero">
        <div className="about__hero-content">
          <h1 className="about__title">About HeadLine</h1>
          <p className="about__subtitle">
            Your trusted source for the latest news and updates from around the world.
            We believe in delivering accurate, timely, and unbiased news coverage.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="about__features">
        <div className="about__features-grid">
          {features.map((feature, index) => (
            <div key={index} className="about__feature-card">
              <div className="about__feature-icon">
                {feature.icon}
              </div>
              <h3 className="about__feature-title">
                {feature.title}
              </h3>
              <p className="about__feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="about__mission">
        <h2 className="about__mission-title">Our Mission</h2>
        <p className="about__mission-content">
          At HeadLine, we strive to be your most reliable source of news and information. 
          Our mission is to deliver accurate, unbiased, and timely news coverage that helps 
          you stay informed about the events shaping our world. We believe in the power of 
          quality journalism to promote understanding and inspire positive change.
        </p>
      </div>

      {/* Contact Section */}
      <div className="about__contact">
        <div className="about__contact-content">
          <h2 className="about__contact-title">Get in Touch</h2>
          <p className="about__contact-subtitle">
            Have questions or feedback? We'd love to hear from you.
          </p>
          
          <a href="mailto:contact@headline.com" className="about__contact-button">
            <Mail />
            <span>Contact Us</span>
          </a>

          <div className="about__contact-info">
            <div className="about__contact-item">
              <Mail />
              <span>info@headline.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};