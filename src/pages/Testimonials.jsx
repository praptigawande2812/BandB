import TestimonialCard from '../components/TestimonialCard';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [googleReviews, setGoogleReviews] = useState([]);
  const [googleStats, setGoogleStats] = useState(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mother of 2',
      content: 'Dr. Smith has been taking care of my children for 5 years. The clinic is always clean, staff is friendly, and my kids actually look forward to their visits! The care is exceptional and I trust them completely with my children\'s health.',
      rating: 5,
      image: '👩‍👧‍👦',
      date: '2024'
    },
    {
      name: 'Michael Chen',
      role: 'Father of 3',
      content: 'The team at Little Hearts goes above and beyond. They explain everything clearly and make sure we understand our children\'s health needs. The emergency support has been a lifesaver for our family.',
      rating: 5,
      image: '👨‍👧‍👦',
      date: '2024'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Mother of 1',
      content: 'As a first-time mom, I was nervous about vaccinations. The staff was so patient and reassuring. I couldn\'t ask for better care. They made me feel confident in my parenting decisions.',
      rating: 5,
      image: '👩‍👶',
      date: '2024'
    },
    {
      name: 'David Thompson',
      role: 'Father of 2',
      content: 'Professional, caring, and knowledgeable. My kids love coming here for check-ups. The doctors take time to answer all our questions and the follow-up care is outstanding.',
      rating: 5,
      image: '👨‍👧‍👦',
      date: '2024'
    },
    {
      name: 'Lisa Martinez',
      role: 'Mother of 3',
      content: 'We\'ve been coming here for 8 years and wouldn\'t go anywhere else. The growth monitoring has been crucial for my children\'s development. The team truly cares about each child.',
      rating: 5,
      image: '👩‍👧‍👦',
      date: '2024'
    },
    {
      name: 'James Wilson',
      role: 'Father of 1',
      content: 'The nutrition counseling helped us tremendously with our picky eater. The staff provided practical advice that actually worked. Our child is now eating healthy and growing properly.',
      rating: 5,
      image: '👨‍👶',
      date: '2024'
    },
    {
      name: 'Maria Garcia',
      role: 'Mother of 2',
      content: 'The telemedicine option has been amazing for minor concerns. Quick, convenient, and effective. The doctors are just as thorough over video as they are in person.',
      rating: 5,
      image: '👩‍👧‍👦',
      date: '2024'
    },
    {
      name: 'Robert Brown',
      role: 'Father of 2',
      content: 'Excellent care for sports physicals and injury management. The doctors understand young athletes and provide comprehensive care that keeps my kids healthy and active.',
      rating: 5,
      image: '👨‍👧‍👦',
      date: '2024'
    },
    {
      name: 'Jennifer Lee',
      role: 'Mother of 1',
      content: 'The infant care program was incredible. As new parents, we had so many questions and concerns. The team guided us through everything with patience and expertise.',
      rating: 5,
      image: '👩‍👶',
      date: '2024'
    }
  ];

  const overallStats = googleStats || {
    rating: 4.9,
    totalReviews: 247,
    fiveStarPercentage: 98
  };

  const ratingBreakdown = [
    { stars: 5, count: 242, percentage: 98 },
    { stars: 4, count: 4, percentage: 2 },
    { stars: 3, count: 1, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 }
  ];

  useEffect(() => {
    const apiKey = import.meta?.env?.VITE_GOOGLE_MAPS_API_KEY;
    const placeId = import.meta?.env?.VITE_GOOGLE_PLACE_ID; // e.g. ChIJN1t_tDeuEmsRUsoyG83frY4
    if (!apiKey || !placeId) return; // fallback to static testimonials

    function loadScript() {
      return new Promise((resolve, reject) => {
        if (window.google?.maps?.places) return resolve();
        const existing = document.querySelector('script[data-google-maps]');
        if (existing) {
          existing.addEventListener('load', () => resolve());
          existing.addEventListener('error', reject);
          return;
        }
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.setAttribute('data-google-maps', '');
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    async function fetchReviews() {
      try {
        await loadScript();
        const dummy = document.createElement('div');
        const service = new window.google.maps.places.PlacesService(dummy);
        service.getDetails(
          {
            placeId,
            fields: ['rating', 'user_ratings_total', 'reviews']
          },
          (place, status) => {
            if (status !== window.google.maps.places.PlacesServiceStatus.OK || !place) {
              return;
            }
            const reviews = (place.reviews || []).map(r => ({
              name: r.author_name,
              role: 'Google Reviewer',
              content: r.text,
              rating: r.rating,
              image: '⭐',
              date: r.relative_time_description
            }));
            setGoogleReviews(reviews);
            setGoogleStats({
              rating: place.rating,
              totalReviews: place.user_ratings_total,
              fiveStarPercentage: Math.round(((place.user_ratings_total ? reviews.filter(x => x.rating === 5).length : 0) / (place.user_ratings_total || 1)) * 100)
            });
          }
        );
      } catch (e) {
        // swallow; fallback to static content
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="testimonials">
      {/* Hero Section */}
      <section className="testimonials-hero py-xl">
        <div className="container">
          <div className="testimonials-hero-content text-center">
            <h1>What Parents Say</h1>
            <p className="hero-subtitle">
              Hear from families who trust us with their children's health and wellbeing
            </p>
            <div className="overall-rating">
              <div className="rating-stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={32} className="filled" />
                ))}
              </div>
              <div className="rating-number">{overallStats.rating}</div>
              <div className="rating-count">Based on {overallStats.totalReviews} reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="rating-breakdown py-xl">
        <div className="container">
          <div className="rating-breakdown-content">
            <div className="breakdown-stats">
              <h2>Rating Breakdown</h2>
              <div className="rating-bars">
                {ratingBreakdown.map((rating, index) => (
                  <div key={index} className="rating-bar">
                    <div className="bar-label">
                      <span>{rating.stars} Star{rating.stars !== 1 ? 's' : ''}</span>
                      <span>{rating.count}</span>
                    </div>
                    <div className="bar-container">
                      <div 
                        className="bar-fill" 
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>
                    <div className="bar-percentage">{rating.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="breakdown-summary">
              <div className="summary-card">
                <div className="summary-icon">⭐</div>
                <div className="summary-content">
                  <h3>{overallStats.fiveStarPercentage}%</h3>
                  <p>5-Star Reviews</p>
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-icon">👥</div>
                <div className="summary-content">
                  <h3>{overallStats.totalReviews}</h3>
                  <p>Total Reviews</p>
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-icon">❤️</div>
                <div className="summary-content">
                  <h3>15+</h3>
                  <p>Years of Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid-section py-xl">
        <div className="container">
          <div className="section-header text-center mb-xl">
            <h2>Parent Testimonials</h2>
            <p>Real stories from real families about their experience with Little Hearts</p>
          </div>
          <div className="testimonials-grid">
            {(googleReviews.length ? googleReviews : testimonials).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="featured-testimonial py-xl">
        <div className="container">
          <div className="featured-content">
            <div className="quote-icon">
              <Quote size={48} />
            </div>
            <blockquote className="featured-quote">
              "Little Hearts Pediatric Clinic has been our family's healthcare home for over 8 years. 
              The doctors and staff don't just treat our children - they truly care about them. 
              From routine check-ups to emergency visits, we've always received exceptional care. 
              The clinic feels like a second home, and our kids actually look forward to their visits. 
              I can't recommend them highly enough."
            </blockquote>
            <div className="featured-author">
              <div className="author-info">
                <h4>Lisa Martinez</h4>
                <p>Mother of 3, Patient since 2016</p>
              </div>
              <div className="author-rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={20} className="filled" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Testimonials;
