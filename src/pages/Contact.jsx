import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    appointmentType: 'well-child'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = 'Child\'s name is required';
    }

    if (!formData.childAge.trim()) {
      newErrors.childAge = 'Child\'s age is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.preferredDate.trim()) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          childName: '',
          childAge: '',
          phone: '',
          email: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
          appointmentType: 'well-child'
        });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', 'Emergency: (555) 123-4567'],
      action: 'Call Now',
      href: 'tel:5551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@littleheartsclinic.com', 'appointments@littleheartsclinic.com'],
      action: 'Send Email',
      href: 'mailto:info@littleheartsclinic.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Health Street', 'Medical District, MD 12345'],
      action: 'Get Directions',
      href: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM', 'Sun: Closed'],
      action: 'View Hours',
      href: '#'
    }
  ];

  const appointmentTypes = [
    { value: 'well-child', label: 'Well-Child Visit' },
    { value: 'sick-visit', label: 'Sick Visit' },
    { value: 'vaccination', label: 'Vaccination' },
    { value: 'follow-up', label: 'Follow-up Visit' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'emergency', label: 'Emergency Visit' }
  ];

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  if (isSubmitted) {
    return (
      <div className="contact">
        <div className="success-message">
          <div className="container">
            <div className="success-content text-center">
              <div className="success-icon">
                <CheckCircle size={64} />
              </div>
              <h1>Thank You!</h1>
              <p className="success-text">
                Your appointment request has been submitted successfully. 
                Our team will contact you within 24 hours to confirm your appointment.
              </p>
              <div className="success-actions">
                <a href="/" className="btn btn-primary">Return Home</a>
                <a href="tel:5551234567" className="btn btn-outline">Call Us Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero py-xl">
        <div className="container">
          <div className="contact-hero-content text-center">
            <h1>Contact Us</h1>
            <p className="hero-subtitle">
              Ready to schedule your child's appointment? We're here to help with 
              all your pediatric care needs.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-icon">📞</div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Support</div>
              </div>
              <div className="stat">
                <div className="stat-icon">📅</div>
                <div className="stat-number">Same Day</div>
                <div className="stat-label">Appointments</div>
              </div>
              <div className="stat">
                <div className="stat-icon">💬</div>
                <div className="stat-number">Quick</div>
                <div className="stat-label">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-main py-xl">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We're here to help with all your pediatric care needs. 
                Choose the most convenient way to reach us.
              </p>
              
              <div className="contact-methods">
                {contactInfo.map((method, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-icon">
                      <method.icon size={24} />
                    </div>
                    <div className="method-content">
                      <h3>{method.title}</h3>
                      <div className="method-details">
                        {method.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="detail-item">
                            {detail}
                          </div>
                        ))}
                      </div>
                      <a href={method.href} className="method-action">
                        {method.action}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder">
                <div className="map-content">
                  <div className="map-icon">🗺️</div>
                  <h3>Visit Our Clinic</h3>
                  <p>123 Health Street, Medical District, MD 12345</p>
                  <a href="https://maps.google.com" className="btn btn-outline">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="appointment-form">
              <div className="form-header">
                <h2>Schedule an Appointment</h2>
                <p>Fill out the form below and we'll contact you to confirm your appointment.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="childName">Child's Name *</label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      className={errors.childName ? 'error' : ''}
                      placeholder="Enter child's name"
                    />
                    {errors.childName && <span className="error-message">{errors.childName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="childAge">Child's Age *</label>
                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className={errors.childAge ? 'error' : ''}
                      placeholder="e.g., 2 years old"
                    />
                    {errors.childAge && <span className="error-message">{errors.childAge}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="appointmentType">Appointment Type</label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                  >
                    {appointmentTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="preferredDate">Preferred Date *</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={errors.preferredDate ? 'error' : ''}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.preferredDate && <span className="error-message">{errors.preferredDate}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferredTime">Preferred Time *</label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={errors.preferredTime ? 'error' : ''}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && <span className="error-message">{errors.preferredTime}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about any specific concerns or questions you have..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <Send size={20} />
                  Schedule Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="emergency-info py-xl">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-text">
              <h3>Emergency Situations</h3>
              <p>
                For life-threatening emergencies, call 911 immediately. For urgent but 
                non-life-threatening concerns, call our emergency line at (555) 123-4567.
              </p>
            </div>
            <div className="emergency-actions">
              <a href="tel:911" className="btn btn-primary emergency-btn">
                Call 911
              </a>
              <a href="tel:5551234567" className="btn btn-outline emergency-btn">
                Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
