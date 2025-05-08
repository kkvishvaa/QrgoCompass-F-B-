import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar" data-aos="fade-down">
            <div className="navbar-content">
                <Link to="/" className="navbar-brand">
                    <img src="Qrgo.png" alt="QRgo Compass Logo" style={{ height: '50px' }} /> QRgo Compass
                </Link>

                <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/login" className="navbar-link">Login</Link>
                </div>

                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
