import React from 'react';
import Base from '../globlePage/Base';
import { Link } from 'react-router-dom';
import Image from '../../buildingImage/Image';
import MainCategory from './MainCategory';
import './category.css';

const CommercialConstruction = () => {
    return (
        <div className="commercial-container">
            <MainCategory>
                <div className="header-section">
                    <h3>Commercial Construction</h3>
                    <Link to="/category" className="back-link">← Back</Link>
                </div>

                <img src={Image.commercialconstruction} alt="Commercial Construction" className="commercial-image" />

                <ul className="commercial-list">
                    <li>
                        <div className="list-icon">🏢</div>
                        <h4>Office Buildings</h4>
                        <p>Specialization in constructing modern, functional office spaces for businesses and organizations.</p>
                        <p>Expertise in multi-story office complexes, emphasizing efficiency and contemporary design.</p>
                        <p>Capability to customize layouts to suit diverse business needs, including open-plan workspaces, meeting rooms, and amenities.</p>
                    </li>
                    <li>
                        <div className="list-icon">🏬</div>
                        <h4>Retail Centers</h4>
                        <p>Proficiency in developing vibrant retail hubs that attract both tenants and customers.</p>
                        <p>Experience in designing versatile retail spaces, including storefronts, shopping arcades, and dining areas.</p>
                        <p>Focus on optimizing traffic flow, maximizing storefront visibility, and ensuring ample parking for shoppers' convenience.</p>
                    </li>
                    <li>
                        <div className="list-icon">🏨</div>
                        <h4>Hotels</h4>
                        <p>Established track record in building hospitality properties that prioritize guest comfort and satisfaction.</p>
                        <p>Expertise in constructing various hotel formats, from boutique accommodations to full-service resorts.</p>
                        <p>Emphasis on creating inviting guest rooms, well-appointed common areas, and recreational facilities to enhance the overall guest experience.</p>
                    </li>
                </ul>
            </MainCategory>
        </div>
    );
}

export default CommercialConstruction;
