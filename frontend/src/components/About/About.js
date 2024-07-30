// src/components/About/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Debtpayoff</h2>
      <p className="about-description">
        At Debtpayoff, our mission is to help individuals and families become debt-free faster by providing automated tools, personalized strategies, and AI-powered insights for debt repayment.
      </p>

      <section className="about-mission">
        <h3 className="about-subtitle">Our Mission</h3>
        <p>
          Our mission is to empower users with the knowledge and tools they need to take control of their finances, reduce debt, and achieve financial freedom.
        </p>
      </section>

      <section className="about-vision">
        <h3 className="about-subtitle">Our Vision</h3>
        <p>
          We envision a world where everyone has access to the resources and support necessary to manage their debt effectively and improve their financial well-being.
        </p>
      </section>

      <section className="about-values">
        <h3 className="about-subtitle">Our Values</h3>
        <ul className="about-values-list">
          <li><strong>Integrity:</strong> We are committed to honesty and transparency in all our dealings.</li>
          <li><strong>Empowerment:</strong> We believe in empowering our users with the tools and knowledge they need to succeed.</li>
          <li><strong>Innovation:</strong> We are constantly innovating to provide the best possible solutions for our users.</li>
          <li><strong>Customer Focus:</strong> Our users are at the heart of everything we do.</li>
        </ul>
      </section>

      <section className="about-team">
        <h3 className="about-subtitle">Meet Our Team</h3>
        <p>
          Our team is composed of financial experts, software developers, and customer support specialists dedicated to helping you achieve your financial goals.
        </p>
      </section>

      <section className="about-contact">
        <h3 className="about-subtitle">Contact Us</h3>
        <p>
          Have any questions or need support? Reach out to our customer service team at support@debtpayoff.com.
        </p>
      </section>
    </div>
  );
}

export default About;
