import React from 'react';
import Base from '../globlePage/Base';
import { Link } from 'react-router-dom';
import MainCategory from './MainCategory';
import './category.css';
import Image from '../../buildingImage/Image';

const InstitutionalConstruction = () => {
    return (
        <div className="institutional-container">
            <MainCategory>
                <div className="header-section">
                    <h1>Institutional Construction</h1>
                    <Link to="/category" className="back-link">← Back</Link>
                </div>

                <img src={Image.BuildingImage3} alt="Institutional Construction" className="header-image" />
                <div className="content-section">
                    <div className="card">
                        <h4>🏫 Schools and Colleges</h4>
                        <p>Welcome to GC Construction's School and College Building Services, where we create inspiring spaces for learning and growth...</p>
                    </div>

                    <div className="card">
                        <h4>🏥 Hospitals and Healthcare Facilities</h4>
                        <p>Welcome to GC Construction's Healthcare Facility Solutions, where we prioritize the health, well-being, and comfort of patients, staff, and visitors...</p>
                    </div>

                    <div className="card">
                        <h4>🏛️ Government Buildings</h4>
                        <p>Welcome to GC Construction's Government Building Services, where we specialize in creating functional, secure, and sustainable spaces for public use...</p>
                    </div>
                </div>
            </MainCategory>
        </div>
    );
};

export default InstitutionalConstruction;
