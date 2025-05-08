import '../styles/Benefits.css';
const Benefits = () => {
    return (
      <section className="benefits">
        <div className="benefit-item" data-aos="zoom-in">
          <i className="fas fa-globe-americas fa-2x" style={{ color: "#2EC4B6", marginBottom: "1rem" }}></i>
          <h4>Global Coverage</h4>
          <p>Track shipments across all major shipping lanes worldwide</p>
        </div>
        <div className="benefit-item" data-aos="zoom-in" data-aos-delay="100">
          <i className="fas fa-shield-alt fa-2x" style={{ color: "#6E57E0", marginBottom: "1rem" }}></i>
          <h4>Military-Grade Security</h4>
          <p>256-bit encryption for all your shipment data</p>
        </div>
        <div className="benefit-item" data-aos="zoom-in" data-aos-delay="200">
          <i className="fas fa-headset fa-2x" style={{ color: "#4361EE", marginBottom: "1rem" }}></i>
          <h4>24/7 Support</h4>
          <p>Round-the-clock maritime tracking specialists</p>
        </div>
      </section>
    );
  }
  
  export default Benefits;
  