import { Award, Users, Heart, Clock, GraduationCap, Stethoscope } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every child with love, respect, and understanding, creating a warm and welcoming environment.'
    },
    {
      icon: Award,
      title: 'Excellence in Medicine',
      description: 'Our team stays current with the latest pediatric advances to provide the best possible care.'
    },
    {
      icon: Users,
      title: 'Family-Centered',
      description: 'We involve parents in every decision and provide education to support your child\'s health journey.'
    },
    {
      icon: Clock,
      title: 'Accessible Care',
      description: 'Flexible scheduling, extended hours, and emergency support when your family needs it most.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Pediatrician',
      credentials: 'MD, FAAP',
      experience: '15+ years',
      image: '👩‍⚕️',
      bio: 'Dr. Johnson is a board-certified pediatrician with over 15 years of experience. She specializes in preventive care and childhood development.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Pediatric Specialist',
      credentials: 'MD, FAAP',
      experience: '12+ years',
      image: '👨‍⚕️',
      bio: 'Dr. Chen focuses on adolescent medicine and sports health. He\'s passionate about helping young athletes stay healthy and perform their best.'
    },
    {
      name: 'Nurse Emily Rodriguez',
      role: 'Lead Pediatric Nurse',
      credentials: 'RN, CPN',
      experience: '10+ years',
      image: '👩‍⚕️',
      bio: 'Emily leads our nursing team with compassion and expertise. She\'s known for her gentle approach with anxious children.'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Little Hearts Clinic Founded' },
    { year: '2012', event: 'Expanded to Full-Service Pediatric Care' },
    { year: '2015', event: 'Added 24/7 Emergency Support' },
    { year: '2018', event: 'Opened Second Location' },
    { year: '2020', event: 'Implemented Telemedicine Services' },
    { year: '2023', event: 'Celebrated 15 Years of Service' }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero py-xl">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text animate-slide-in-left">
              <h1>About Little Hearts Pediatric Clinic</h1>
              <p className="hero-subtitle">
                For over 15 years, we've been dedicated to providing exceptional 
                pediatric care in a warm, family-friendly environment. Our mission 
                is to help every child grow up healthy, happy, and strong.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years of Service</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Families Served</div>
                </div>
                <div className="stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Patient Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="about-hero-image animate-slide-in-right">
              <div className="hero-image-placeholder">
                <div className="placeholder-content">
                  <div className="main-icon">🏥</div>
                  <p>Compassionate care for every child</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-xl">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At Little Hearts Pediatric Clinic, we believe that every child deserves 
                access to high-quality healthcare in an environment that feels safe, 
                welcoming, and supportive. Our mission is to:
              </p>
              <ul className="mission-list">
                <li>Provide comprehensive, evidence-based pediatric care</li>
                <li>Create a warm, child-friendly environment that reduces anxiety</li>
                <li>Educate and empower families to make informed health decisions</li>
                <li>Support children's physical, emotional, and developmental wellbeing</li>
                <li>Build lasting relationships with families in our community</li>
              </ul>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="main-icon">❤️</div>
                  <p>Dedicated to your child's health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-xl">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-xl">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h2>Meet Our Team</h2>
            <p>Experienced professionals dedicated to your child's health</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="team-image">
                  <span className="image-placeholder">{member.image}</span>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-credentials">{member.credentials}</p>
                  <p className="team-experience">{member.experience}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section py-xl">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h2>Our Journey</h2>
            <p>Milestones in our commitment to pediatric care</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-event">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta py-xl">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Join Our Family?</h2>
            <p>
              Experience the difference that compassionate, comprehensive pediatric care can make 
              in your child's life. Schedule your first visit today.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">
                Schedule Appointment
              </a>
              <a href="/services" className="btn btn-outline">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
