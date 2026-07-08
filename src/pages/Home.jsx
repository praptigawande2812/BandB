import { Link } from 'react-router-dom';
import { Calendar, Shield, Heart, Users, Star, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import docImage from '../images/image.jpg';
import photo1 from '../images/1.jpg';
import photo2 from '../images/2.jpg';
import photo3 from '../images/3.jpg';
import photo4 from '../images/4.jpg';
import './Home.css';
import { useState } from 'react';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'General Pediatric Care',
      description: 'Early recognition of signs & treatment of all pediatric ailments with multidisciplinary approach',
      features: ['Immunization schedules', 'Travel vaccines', 'Flu shots']
    },
    {
      icon: Heart,
      title: 'Neonatal Consultation',
      description: 'Expert guidance for common newborn concerns and complete management of neonatal health conditions',
      features: ['Height & weight tracking', 'Milestone assessments', 'Growth charts']
    },
    {
      icon: Users,
      title: 'Growth & Development Assessment',
      description: 'Regular monitoring of physical, cognitive, and developmental milestones to ensure healthy growth',
      features: ['Well-child visits', 'Sick visits', 'Parent education']
    },
    {
      icon: Shield,
      title: 'Infant & Child Nutrition Counseling',
      description: 'Personalized nutritional advice to support healthy eating habits and optimal growth at every stage',
      features: ['Immunization schedules', 'Travel vaccines', 'Flu shots']
    },
    {
      icon:Heart,
      title: 'Adolescent Counselling',
      description: 'Confidential and supportive guidance to address physical, emotional, and behavioral changes during adolescence',
      features: ['Height & weight tracking', 'Milestone assessments', 'Growth charts']
    },
    {
      icon:Users,
      title: 'Nebulisation Facility',
      description: 'Safe and effective nebulisation treatment for respiratory conditions in infants and children',
      features: ['Well-child visits', 'Sick visits', 'Parent education']
    },
    {
      icon: Shield,
      title: 'Vaccination',
      description: 'Needle less immunisation facility available for comprehensive immunisation following national vaccination schedule',
      features: ['Immunization schedules', 'Travel vaccines', 'Flu shots']
    },
    {
      icon: Heart,
      title: 'Pharmacy',
      description: 'In-house pharmacy providing easy access to prescribed medicines for your child’s convenience',
      features: ['Height & weight tracking', 'Milestone assessments', 'Growth charts']
    }
  ];

  const testimonials = [
    {
      name: 'Ashish Gorle',
      content: 'Highly recommend Dr. Vaishnavi. She listens carefully, diagnoses thoroughly, and provides expert guidance in a child-friendly environment.',
      rating: 5,
      date: '3 weeks ago',
      initial: 'A',
      verified: true
    },
    {
      name: 'Pranita Ghule',
      content: 'Dr. Vaishnavi provides expert pediatric care and ensures parents fully understand the treatment plan. Truly a wonderful doctor.',
      rating: 5,
      date: '1 month ago',
      initial: 'P',
      verified: true
    },
    {
      name: 'Shikha Shukla',
      content: 'Dr. Vaishnavi is an excellent pediatrician who truly cares for her patients. She listens carefully, explains everything clearly, and makes children feel comfortable. Her kind and patient nature puts both children and parents at ease. Highly recommended for any parent looking for a caring and professional pediatrician!',
      rating: 5,
      date: '2 months ago',
      initial: 'S',
      verified: true
    },
    {
      name: 'Aniket Kulkarni',
      content: 'Visited the clinic for my baby’s check-up and had a very positive experience. The care and attention were excellent.',
      rating: 5,
      date: '1 month ago',
      initial: 'A',
      verified: true
    },
    {
      name: 'Milap Patel',
      content: 'Dr. Vaishnavi is an excellent, humble, and knowledgeable doctor. She explains everything in depth and answers all queries patiently.',
      rating: 5,
      date: '1 week ago',
      initial: 'M',
      verified: true
    },
    {
      name: 'Samar Ahmad',
      content: 'A wonderful experience. The clinic is specially designed for newborns and children, and you feel warmth and care the moment you enter.',
      rating: 5,
      date: '1 month ago',
      initial: 'S',
      verified: true
    },
    {
      name: 'Bhagyashree Kalshetty',
      content: 'Very attentive doctor. Answers all doubts patiently. The clinic is clean, well maintained, and staff is polite.',
      rating: 5,
      date: '2 weeks ago',
      initial: 'B',
      verified: true
    },
    {
      name: 'Nikita Mankar',
      content: 'Dr. Vaishnavi is a phenomenal doctor and a kind human being. Professional, to the point, and very supportive with parental guidance.',
      rating: 5,
      date: '2 weeks ago',
      initial: 'N',
      verified: true
    },
    {
      name: 'Neha Singh',
      content: 'Smooth vaccination experience for our 1.5-month-old baby. Doctor explained everything clearly. Very knowledgeable pediatrician.',
      rating: 5,
      date: '3 weeks ago',
      initial: 'N',
      verified: true
    },
    {
      name: 'Balaji Gayke',
      content: 'Excellent experience. Doctor explained the condition and treatment in detail. Clinic is child-friendly and well maintained.',
      rating: 5,
      date: '2 days ago',
      initial: 'B',
      verified: true
    }
  ];
  

  const [expandedTestimonials, setExpandedTestimonials] = useState(new Set());

  const toggleTestimonial = (index) => {
    setExpandedTestimonials(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const scrollTestimonials = (direction) => {
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
      const scrollAmount = 280; // Adjust scroll amount as needed
      carousel.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home">
      <Hero />
      
      {/* Stats Section */}
      {/* <section className="stats-section py-xl">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item animate-fade-in-up">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Preview */}
      <section className="services-preview py-xxl">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h2>Our Services</h2>
            <p>Comprehensive pediatric care tailored to your child's needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="text-center mt-lg">
            {/* <Link to="/services" className="btn btn-primary">
              View All Services
              <ArrowRight size={16} />
            </Link> */}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us py-xxl">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text animate-slide-in-left">
              <h2>Dr.Vaishnavi Bhagat - Gavhane</h2>
              <div>
              <h4>Consulting Pediatrician & Neonatologist</h4>
              <strong>MBBS</strong>(GMC Nagpur), <strong>MD Pediatics</strong>(BJ GMC,Pune), <strong>Fellowship in Neonatology</strong>(Sassoon Hospital,Pune) 
              </div>
              <br></br>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">🏥</div>
                  <div>
                    <h4>Compassionate Care for Little Smiles</h4>
                    <p>We offer gentle, personalized pediatric care to ensure your child grows up healthy, happy, and confident.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">👩‍⚕️</div>
                  <div>
                    <h4>Years of Expertise, Endless Care</h4>
                    <p>Backed by over a decade of hands-on experience, our clinic combines medical excellence with heartfelt care for every child.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💝</div>
                  <div>
                    <h4>Towards healthier tomorrow</h4>
                    <p>From newborn care to adolescent health, we focus on nurturing your child’s overall growth—physically, emotionally, and socially.</p>
                  </div>
                </div>
              </div>
              {/* <Link to="/about" className="btn btn-secondary mt-md">
                Learn More About Us
              </Link> */}
            </div>
            {/* <div className="why-choose-image animate-slide-in-right">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">👶</div>
                  <p>Happy, healthy children</p>
                </div>
              </div>
            </div> */}
            <div className="home-image animate-slide-in-right">
              <div className="home-image-container">
                <div className="home-image-placeholder">
                  <div className="image-overlay"></div>
                  <img
                    src={docImage}
                    alt="Pediatric Clinic"
                    className="home-image-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Camp Gallery */}
      <section className="vaccination-gallery py-xxl">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h2>Glimpses of our little ones</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img src={photo1} alt="Needleless Vaccination Camp" className="gallery-image" />
                <div className="gallery-overlay"></div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img src={photo2} alt="Needleless Vaccination Camp" className="gallery-image" />
                <div className="gallery-overlay"></div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img src={photo3} alt="Needleless Vaccination Camp" className="gallery-image" />
                <div className="gallery-overlay"></div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image-wrapper">
                <img src={photo4} alt="Needleless Vaccination Camp" className="gallery-image" />
                <div className="gallery-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-xxl">
        <div className="container">
          <div className="testimonials-header text-center mb-xl">
            <h2 className="testimonials-main-title">Hear From Our Happy Parents</h2>
            <p className="testimonials-intro">
              At Babies & Beyond Children Clinic, we take pride in providing the best care for your little ones. 
              But don't just take our word for it—explore the heartfelt testimonials from parents who have trusted us with 
              their children's health and vaccinations.
            </p>
          </div>
          
          <div className="testimonials-content">
            {/* Testimonials Horizontal Scroll */}
            <div className="testimonials-carousel-container">
              <button className="carousel-arrow carousel-arrow-left" onClick={() => scrollTestimonials('prev')} aria-label="Previous testimonial">
                <ChevronLeft size={24} />
              </button>
              
              <div className="testimonials-carousel">
                {testimonials.map((testimonial, index) => (
                  <div key={`${testimonial.name}-${index}`} className="google-testimonial-card">
                    <div className="testimonial-card-header">
                      <div className="testimonial-profile">
                        <div className="profile-avatar" style={{ backgroundColor: '#1D6D80' }}>
                          {testimonial.initial}
                        </div>
                        <div className="testimonial-name-date">
                          <div className="testimonial-name-row">
                            <span className="testimonial-name">{testimonial.name}</span>
                            {/* <span className="testimonial-date">{testimonial.date}</span> */}
                            {/* <svg className="google-logo-small" width="40" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0Z" fill="#4285F4"/>
                              <path d="M9 2C11.76 2 14 4.24 14 7C14 9.76 11.76 12 9 12C6.24 12 4 9.76 4 7C4 4.24 6.24 2 9 2Z" fill="#EA4335"/>
                              <path d="M9 12C11.76 12 14 14.24 14 17C14 19.76 11.76 22 9 22C6.24 22 4 19.76 4 17C4 14.24 6.24 12 9 12Z" fill="#FBBC04"/>
                              <path d="M2 9C2 11.76 4.24 14 7 14C9.76 14 12 11.76 12 9C12 6.24 9.76 4 7 4C4.24 4 2 6.24 2 9Z" fill="#34A853"/>
                            </svg> */}
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-rating-row">
                        <div className="testimonial-stars">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} size={14} className="testimonial-star-filled" fill="#FFA500" />
                          ))}
                        </div>
                        {testimonial.verified && (
                          <CheckCircle2 size={16} className="verified-icon" />
                        )}
                      </div>
                    </div>
                    <div className="testimonial-text">
                      {testimonial.content.length > 150 ? (
                        <>
                          {expandedTestimonials.has(index) ? (
                            <>
                              {testimonial.content}
                              <span className="read-more" onClick={() => toggleTestimonial(index)}>Read less</span>
                            </>
                          ) : (
                            <>
                              {testimonial.content.substring(0, 150)}...
                              <span className="read-more" onClick={() => toggleTestimonial(index)}>Read more</span>
                            </>
                          )}
                        </>
                      ) : (
                        testimonial.content
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="carousel-arrow carousel-arrow-right" onClick={() => scrollTestimonials('next')} aria-label="Next testimonial">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-xxl">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Schedule Your Child's Visit?</h2>
            <p>
              Book an appointment today and give your child the gift of excellent healthcare 
              in a warm, friendly environment.
            </p>
            <div className="cta-actions">
              {/* <Link to="/contact" className="btn btn-primary">
                <Calendar size={20} />
                Book Appointment
              </Link> */}
              <a href="tel:+919404339944" className="btn btn-outline">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
