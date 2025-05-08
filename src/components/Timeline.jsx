import '../styles/Timeline.css';
const Timeline = () => {
    return (
      <section className="timeline">
        <div className="timeline-step" data-aos="fade-right">
          <h3>1. Create Shipment</h3>
          <p>Enter vessel details and set your maritime route with one click.</p>
        </div>
        <div className="timeline-step" data-aos="fade-right" data-aos-delay="100">
          <h3>2. Live Tracking</h3>
          <p>Follow your cargo's journey across oceans with live updates.</p>
        </div>
        <div className="timeline-step" data-aos="fade-right" data-aos-delay="200">
          <h3>3. ETA Monitoring</h3>
          <p>Receive accurate arrival predictions and real-time adjustments.</p>
        </div>
      </section>
    );
  }
  
  export default Timeline;
  