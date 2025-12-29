import { Star } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, role, content, rating, image, delay = 0 }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'filled' : 'empty'}
      />
    ));
  };

  return (
    <div 
      className="testimonial-card animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="testimonial-header">
        <div className="testimonial-image">
          <span className="image-placeholder">{image}</span>
        </div>
        <div className="testimonial-info">
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-role">{role}</p>
          <div className="testimonial-rating">
            {renderStars(rating)}
          </div>
        </div>
      </div>
      
      <div className="testimonial-content">
        <blockquote className="testimonial-quote">
          "{content}"
        </blockquote>
      </div>
      
      <div className="testimonial-footer">
        <div className="quote-mark">"</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
