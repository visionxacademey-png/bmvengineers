import React from "react";
import "../styles/Services.css";

function Services() {
  return (
    <section className="services">

      <div className="services-container">

        <h1 className="fade-up">Our Services</h1>

        <p className="services-subtitle fade-up delay1">
          We provide a wide range of engineering and technical services
          designed to deliver quality, safety, and innovation across
          every project.
        </p>

        <div className="services-grid">

          <div className="service-card fade-up delay2">
            <span className="material-symbols-outlined icon">precision_manufacturing</span>
            <h3>Mechanical QA/QC</h3>
            <p>Ensuring mechanical systems meet industry standards through precise quality control and inspection.</p>
          </div>

          <div className="service-card fade-up delay3">
            <span className="material-symbols-outlined icon">foundation</span>
            <h3>Civil QA/QC</h3>
            <p>Delivering structural reliability with professional civil engineering inspection and compliance.</p>
          </div>

          <div className="service-card fade-up delay4">
            <span className="material-symbols-outlined icon">precision_manufacturing</span>
            <h3>CNC Machining</h3>
            <p>High-precision CNC machining services for customized engineering and manufacturing needs.</p>
          </div>

          <div className="service-card fade-up delay5">
            <span className="material-symbols-outlined icon">shield</span>
            <h3>Safety Services</h3>
            <p>Comprehensive safety solutions ensuring workplace protection and regulatory compliance.</p>
          </div>

          <div className="service-card fade-up delay6">
            <span className="material-symbols-outlined icon">apartment</span>
            <h3>Building Services</h3>
            <p>Integrated building engineering services focused on quality, efficiency, and sustainability.</p>
          </div>

          <div className="service-card fade-up delay7">
            <span className="material-symbols-outlined icon">ac_unit</span>
            <h3>MEP & HVAC</h3>
            <p>Design and maintenance of mechanical, electrical, plumbing, and HVAC systems.</p>
          </div>

          <div className="service-card fade-up delay8">
            <span className="material-symbols-outlined icon">3d_rotation</span>
            <h3>3D Printing</h3>
            <p>Rapid prototyping and manufacturing using advanced 3D printing technologies.</p>
          </div>

          <div className="service-card fade-up delay9">
            <span className="material-symbols-outlined icon">design_services</span>
            <h3>Interior Designing</h3>
            <p>Creating modern and functional interior spaces with professional design solutions.</p>
          </div>

          <div className="service-card fade-up delay10">
            <span className="material-symbols-outlined icon">park</span>
            <h3>Landscaping & Development</h3>
            <p>Designing outdoor environments that combine aesthetics, sustainability, and functionality.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;