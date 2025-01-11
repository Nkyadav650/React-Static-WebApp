import React from 'react';
import MainCategory from './MainCategory';
import './category.css';

const SafetyCompliance = () => {
    return (
        <div className="safety-compliance-container">
            <MainCategory>
                <div className="header-section">
                    <h1>Safety and Compliance</h1>
                    <p>
                        At GC Construction, safety and compliance are at the core of everything we do. We prioritize creating safe environments for workers, clients, and communities while adhering to industry regulations and standards.
                    </p>
                </div>

                <div className="content-section">
                    <div className="card">
                        <h2>🔍 Inspections</h2>
                        <p>
                            Regular inspections are essential to identify potential hazards, ensure compliance with regulations, and maintain a safe working environment. Our team conducts comprehensive site inspections to ensure safety protocols are followed at every stage of the construction process.
                        </p>
                    </div>

                    <div className="card">
                        <h2>📋 Compliance Management</h2>
                        <p>
                            We ensure that all our projects meet legal and regulatory requirements. Our compliance management system tracks and monitors all relevant safety standards, ensuring that your project is always up to date with the latest industry guidelines.
                        </p>
                    </div>

                    <div className="card">
                        <h2>⚠️ Safety Protocols</h2>
                        <p>
                            We implement strict safety protocols to protect workers and minimize risks on-site. Our safety measures include regular training, personal protective equipment (PPE), emergency response plans, and continuous risk assessments to create a secure environment for everyone involved.
                        </p>
                    </div>
                </div>
            </MainCategory>
        </div>
    );
};

export default SafetyCompliance;
