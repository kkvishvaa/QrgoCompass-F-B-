import '../styles/Features.css';
const FeatureGrid = () => {
    return (
      <section className="feature-grid" id="features">
        <div className="feature-card" data-aos="fade-up">
          <i className="fas fa-satellite fa-3x" style={{ color: 'var(--accent-teal)' }}></i>
          <h3>Real-Time Ship Tracking</h3>
          <p>Monitor your cargo's exact position with live GPS updates across all oceans.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
          <i className="fas fa-map-marked-alt fa-3x" style={{ color: 'var(--accent-teal)' }}></i>
          <h3>Detailed Route Management</h3>
          <p>Track every checkpoint with precision from departure to destination port.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
          <i className="fas fa-qrcode fa-3x" style={{ color: 'var(--accent-teal)' }}></i>
          <h3>QR Verification System</h3>
          <p>Secure checkpoint verification through automated QR code scanning.</p>
        </div>
      </section>
    );
  }
  
  export default FeatureGrid;
  