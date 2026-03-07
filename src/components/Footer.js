import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}

        <div className="footer-section">
          <h2>BMV Engineers</h2>
          <p>
            Delivering innovative engineering solutions with quality,
            precision, and safety across every project.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </div>

        {/* Our Services */}

        <div className="footer-section">
          <h3>Our Services</h3>

          <p>Mechanical QA/QC</p>
          <p>Civil QA/QC</p>
          <p>Safety Services</p>
          <p>CNC Machining</p>
        </div>

        {/* Contact Info */}

        <div className="footer-section">
          <h3>Contact Us</h3>

          <p className="footer-contact">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:hrbmvengineers@gmail.com">
              hrbmvengineers@gmail.com
            </a>
          </p>

          <p className="footer-contact">
            <FaMapMarkerAlt className="contact-icon" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Neeloth+Plaza+East+Nadakkavu+Kozhikode"
              target="_blank"
              rel="noreferrer"
            >
              Door No: 2951/A, Ground Floor, Neeloth Plaza,  
              Holy Cross IMT Road, East Nadakkavu,  
              Opp Malayala Manorama, Wayanad Road,  
              Kozhikode, Kerala
            </a>
          </p>

          {/* Social Media */}

          <div className="social-icons">

            <a
              href="https://wa.me/919074450935"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/bmv_engineers"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        © {new Date().getFullYear()} BMV Engineers. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;