import React from 'react';
import './ReasonsSection.css';

const ReasonCard = ({ number, title, description, colorClass }) => (
    <div className={`reason-card ${colorClass}`}>
        <div className="reason-number">{number}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const ReasonsSection = () => {
    return (
        <section className="reasons-section">
            <h2 className="section-title">Ինչու OVVIO</h2>
            <div className="cards-container">
                <ReasonCard
                    number="1"
                    title="Հուսալի է"
                    description="Երեք մրցակցային կատարելություններ դեպի..."
                    colorClass="color-green"
                />
                <ReasonCard
                    number="2"
                    title="Կայուն է"
                    description="Համաձայնեցված դիզայնի ֆիլմիկացված..."
                    colorClass="color-purple"
                />
                <ReasonCard
                    number="3"
                    title="Վստահելի է"
                    description="Տասնյակ հազարավոր բաժանորդներ ՀՀ 19․․․"
                    colorClass="color-green"
                />
            </div>
        </section>
    );
};

export default ReasonsSection;
