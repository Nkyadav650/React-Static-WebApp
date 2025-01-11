import React from 'react';
import Base from '../globlePage/Base';
import { Link } from 'react-router-dom';
import MainCategory from './MainCategory';
import './category.css';

const IndustrialConstruction = () => {
    return (
        <div className="industrial-container">
            <MainCategory>
                <div className="header-section">
                    <h3>Industrial Construction</h3>
                    <Link to="/category" className="back-link">← Back</Link>
                </div>

                <ul className="industrial-list">
                    <li>
                        <h4>🏭 Factories</h4>
                        <p>Welcome to GC Construction's Factory Construction Division, where we specialize in creating cutting-edge industrial facilities tailored to meet the unique needs of modern manufacturing.</p>
                        <p>We deliver high-quality, efficient, and innovative factory spaces designed to optimize workflow, enhance productivity, and promote safety.</p>
                    </li>

                    <li>
                        <h4>📦 Warehouses</h4>
                        <p>At GC Construction, we craft warehouse spaces that not only store goods but also inspire efficiency and innovation.</p>
                        <p>Our warehouse solutions range from bespoke storage spaces to automated distribution centers, all built with a focus on sustainability and adaptability.</p>
                    </li>

                    <li>
                        <h4>🚧 Roads and Highways</h4>
                        <p>GC Construction's Roads and Highways Division is committed to building and maintaining vital transportation infrastructure that connects communities and drives economic growth.</p>
                        <p>We incorporate eco-friendly materials and energy-efficient technologies to ensure long-term durability and minimal environmental impact.</p>
                    </li>
                </ul>
            </MainCategory>
        </div>
    );
}

export default IndustrialConstruction;
