import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}

      <section className="hero">
        <div className="hero-content">

          <h1 className="fade-up">
            Engineering Excellence <br />
            With Innovation & Precision
          </h1>

          <p className="fade-up delay1">
            BMV Engineers provides reliable mechanical and civil engineering
            solutions including QA/QC, safety services, CNC machining and
            advanced manufacturing technologies.
          </p>

          <div className="hero-buttons fade-up delay2">
            <Link to="/services">
              <button className="primary-btn">Our Services</button>
            </Link>

          </div>

        </div>
      </section>


      {/* SERVICES PREVIEW */}

      <section className="services-preview">

        <h2 className="fade-up">Our Core Services</h2>

        <div className="services-preview-grid">

          <div className="preview-card fade-up delay1">
            <span className="material-symbols-outlined icon">
              precision_manufacturing
            </span>
            <h3>Mechanical QA/QC</h3>
          </div>

          <div className="preview-card fade-up delay2">
            <span className="material-symbols-outlined icon">
              foundation
            </span>
            <h3>Civil QA/QC</h3>
          </div>

          <div className="preview-card fade-up delay3">
            <span className="material-symbols-outlined icon">
              shield
            </span>
            <h3>Safety Services</h3>
          </div>

          <div className="preview-card fade-up delay4">
            <span className="material-symbols-outlined icon">
              precision_manufacturing
            </span>
            <h3>CNC Machining</h3>
          </div>

        </div>

        <Link to="/services">
          <button className="view-more-btn fade-up delay5">
            View All Services →
          </button>
        </Link>

      </section>


      {/* WHY CHOOSE US */}

      <section className="why-us">

        <h2 className="fade-up">Why Choose BMV Engineers</h2>

        <div className="why-grid">

          <div className="why-card fade-up delay1">
            <span className="material-symbols-outlined">verified</span>
            <h3>Quality Assurance</h3>
            <p>Strict QA/QC standards ensuring reliability and excellence.</p>
          </div>

          <div className="why-card fade-up delay2">
            <span className="material-symbols-outlined">engineering</span>
            <h3>Expert Engineers</h3>
            <p>Highly skilled professionals delivering efficient solutions.</p>
          </div>

          <div className="why-card fade-up delay3">
            <span className="material-symbols-outlined">precision_manufacturing</span>
            <h3>Advanced Technology</h3>
            <p>Utilizing CNC machining and 3D printing innovations.</p>
          </div>

          <div className="why-card fade-up delay4">
            <span className="material-symbols-outlined">workspace_premium</span>
            <h3>Industry Standards</h3>
            <p>Compliance with global engineering and safety standards.</p>
          </div>

        </div>

      </section>


      {/* INDUSTRIES */}

      <section className="industries">

        <h2 className="fade-up">Industries We Serve</h2>

        <div className="industry-grid">

          <div className="industry-card fade-up delay1">Construction</div>
          <div className="industry-card fade-up delay2">Manufacturing</div>
          <div className="industry-card fade-up delay3">Infrastructure</div>
          <div className="industry-card fade-up delay4">Industrial Plants</div>

        </div>

      </section>


      {/* CALL TO ACTION */}

      <section className="cta">

        <h2>Ready to Start Your Project?</h2>

        <p>
          Contact BMV Engineers today to discuss your engineering
          requirements and get professional solutions.
        </p>

        <a
          href="https://wa.me/919074450935?text=Hello%20BMV%20Engineers%20I%20would%20like%20to%20know%20more"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta-btn">Contact Us</button>
        </a>

      </section>

    </div>
  );
}

export default Home;