import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="service-card animate-fade-in-up">
      <div className="service-icon">
        {Icon && <Icon size={40} />}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
