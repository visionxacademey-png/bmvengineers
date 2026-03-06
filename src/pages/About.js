import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        <h1 className="fade-up">Who We Are</h1>

        <p className="fade-up delay1">
          Archon Engineers is a dynamic and forward-thinking company
          specializing in mechanical and civil QA/QC, safety services,
          and maintenance solutions. With an unwavering commitment to
          quality and precision, we ensure compliance with the highest
          industry standards, delivering reliable and effective results
          across every project.
        </p>

        <p className="fade-up delay2">
          Our expertise spans advanced manufacturing technologies,
          including CNC machining and 3D printing, enabling us to provide
          innovative and customized engineering solutions that meet the
          diverse needs of our clients.
        </p>

        {/* Vision & Mission */}

        <div className="vision-mission">

          <div className="card fade-up delay3">
            <h2>Our Vision</h2>
            <p>
              To become a leading engineering solutions provider by
              delivering innovative, reliable, and sustainable services
              that exceed industry standards and client expectations.
            </p>
          </div>

          <div className="card fade-up delay4">
            <h2>Our Mission</h2>
            <p>
              To provide high-quality engineering services through
              advanced technology, skilled expertise, and a strong
              commitment to safety, precision, and continuous innovation.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;