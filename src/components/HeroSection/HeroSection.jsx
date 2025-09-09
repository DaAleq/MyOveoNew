import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Մինչև 40 000 Գ&nbsp;ՆՎԵՐ</h1>
        <p>
          Միացիր ALL In կամ Wi-Fi փաթեթներից մեկին և
          ստացիր մինչև 40 000 դրամ բաժանորդային
          հաշիվդ
        </p>
        <div className="hero-buttons">
          <Link to="/more-details" className="btn btn-primary">
            Իմանալ ավելին
          </Link>
          <Link to="/connect-now" className="btn btn-secondary">
            Միանալ հիմա
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
