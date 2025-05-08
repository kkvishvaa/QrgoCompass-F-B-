import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartTrackingClick = () => {
    navigate('/login');
  };

  return (
    <section className="hero" data-aos="fade-in">
      <div className="hero-content">
        <h1 data-aos="zoom-in">Steer Your Shipments Across the Seas with Precision</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          From port to port, our maritime shipment tracker ensures your goods sail smoothly. Stay informed with real-time updates and track your shipments like never before.
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
       
          <button onClick={handleStartTrackingClick} className="btn btn-primary">
            <i className="fas fa-ship"></i>
            Start Tracking
          </button>
          <a href="#features" className="btn btn-secondary">
            <i className="fas fa-compass"></i>
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
