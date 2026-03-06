import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
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

        {/* Services */}

        <div className="footer-section">
          <h3>Our Services</h3>

          <p>Mechanical QA/QC</p>
          <p>Civil QA/QC</p>
          <p>Safety Services</p>
          <p>CNC Machining</p>
        </div>

        {/* Social Media */}

        <div className="footer-section">
          <h3>Connect With Us</h3>

          <div className="social-icons">

            <a
              href="https://wa.me/919074450935"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/bmv_engineers?igsh=MXF6enBmYmJmMmVhYQ=="
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