import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Globe, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { path: '/services', label: 'General Pediatric Care' },
    { path: '/services', label: 'Neonatal Consultation & Newborn Care' },
    { path: '/services', label: 'Growth & Development Assessment' },
    { path: '/services', label: 'Infant & Child Nutrition Counselling' },
    { path: '/services', label: 'Adolescent Counselling' },
    { path: '/services', label: 'Nebulisation Facility' },
    { path: '/services', label: 'Needlefree Vaccination' },
    { path: '/services', label: 'Pharmacy' }

  ];

  const socialLinks = [
    { icon: Globe, url: 'https://share.google/I6IMhX9o0gKm70zTM', label: 'Google' },
    { icon: Instagram, url: 'https://www.instagram.com/babies.and.beyondclinic/', label: 'Instagram' }
    // { icon: Twitter, url: '#', label: 'Twitter' }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Clinic Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">🏥</div>
                <div className="logo-text">
                  <h2 className="logo-name">Babies & Beyond</h2>
                  <h3 className="logo-subtitle">Pediatric Clinic</h3>
                </div>
              </div>
              <p className="footer-description">
                Providing compassionate, comprehensive pediatric care in a warm and friendly environment. 
                Your child's health and wellbeing are our top priorities.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to={service.path} className="footer-link">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h2 className="footer-title">Contact Info</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Shop no.8, Ground Floor, Pink City Commercial, Wakad</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+91 9404339944</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>babies.beyondclinic01@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Clock size={16} />
                  <span>
                    Mon-Sat: 11:00 AM - 2:00 PM & 4:00 PM - 10:00 PM<br />
                    Sun: 11:00 AM - 2:00 PM & Evening<br />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Babies & Beyond Children Clinic. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
