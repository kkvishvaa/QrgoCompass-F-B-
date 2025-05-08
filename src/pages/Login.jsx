import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import "../styles/Login.css";
import axios from "axios";
import Cookies from "js-cookie"; 

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("mariners");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",  
      once: true,  
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = `https://qrgocompassb.onrender.com/api/${role}/${isSignup ? "signup" : "login"}`;
  
    try {
      const payload = isSignup
        ? formData
        : { email: formData.email, password: formData.password };
      const res = await axios.post(endpoint, payload);
  
      const token = res.data.jwtToken; 
  
      if (token) {
        Cookies.set("jwt_token", token, { expires: 1 });
        navigate("/shipments");
      }
  
      alert(`${isSignup ? "Signup" : "Login"} successful!`);
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };
  

  return (
    <div className="login-container" data-aos="fade-up">
      <div className="catchy-description" data-aos="fade-right">
        <h1>
          <img src="/Qrgo.png" alt="Logo" className="logo-img" style={{ height: '90px' }} />
          QRgo Compass
        </h1>
        <p>
          Welcome to QRgo Compass – Your Ultimate Cargo Shipment Tracker for Real-Time Logistics!
        </p>
      </div>

      <div className="toggle-buttons" data-aos="flip-left">
        <button onClick={() => setIsSignup(false)} className={!isSignup ? "active" : "inactive"}>Login</button>
        <button onClick={() => setIsSignup(true)} className={isSignup ? "active" : "inactive"}>Signup</button>
      </div>

      <form onSubmit={handleSubmit} className="login-form" data-aos="zoom-in">
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)} data-aos="fade-up">
            <option value="mariners">Mariner</option>
            <option value="admins">Admin</option>
          </select>
        </label>

        {isSignup && (
          <div data-aos="fade-up">
            <label>Username:</label>
            <input name="username" onChange={handleChange} required />
          </div>
        )}

        <div data-aos="fade-up">
          <label>Email:</label>
          <input name="email" type="email" onChange={handleChange} required />
        </div>

        <div data-aos="fade-up">
          <label>Password:</label>
          <input name="password" type="password" onChange={handleChange} required />
        </div>

        <button type="submit" data-aos="fade-up">{isSignup ? "Signup" : "Login"}</button>
      </form>
    </div>
  );
}
