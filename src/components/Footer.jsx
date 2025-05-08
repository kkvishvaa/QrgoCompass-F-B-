import '../styles/Footer.css';
const Footer = () => {
    return (
      <footer data-aos="fade-up">
        <div className="footer-links">
          <a href="mailto:contact@example.com">Contact Us</a>
        </div>
        <div className="footer-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} QRgo Compass. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  