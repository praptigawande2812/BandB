import { Link } from 'react-router-dom';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import babyImage from '../images/baby.jpg'; 
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            
            {/* Left Text Section */}
            <div className="hero-text animate-slide-in-left">
              <h1 className="hero-title">
                Babies And Beyond
                <h5 className="hero-title-accent">Children's Clinic and Vaccination Center</h5>
              </h1>
              <p className="hero-description">
                Welcome to Babies & Beyond Children's Clinic, where we provide compassionate,
                comprehensive healthcare for children of all ages. Our experienced team
                is dedicated to ensuring your child grows up healthy, happy, and strong.
              </p>

              <div className="hero-actions">
                {/* <Link to="/contact" className="btn btn-primary btn-lg">
                  <Calendar size={20} />
                  Book Appointment
                  <ArrowRight size={16} />
                </Link> */}
                <a 
                  href="tel:+919404339944"
                  className="btn btn-primary btn-lg"
                >
                  <Phone size={20} />
                  Call Us
                </a>
                <a 
                  href="https://wa.me/919404339944?text=Hello, I would like to book an appointment for my child."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg"
                >
                  Contact Us
                </a>
              </div>

              <div className="hero-contact">
                <div className="contact-item-p">
                <h4>Open 7 days a week</h4>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="hero-image animate-slide-in-right">
              <div className="hero-image-container">
                <div className="hero-image-placeholder">
                  <div className="image-overlay"></div>
                  <img
                    src={babyImage}
                    alt="Pediatric Clinic"
                    className="hero-image-img"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
