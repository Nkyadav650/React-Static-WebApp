import React from "react";
import Image from "../../buildingImage/Image";
import MainCategory from "./MainCategory";
import "./category.css";

const ResidentialConstruction = () => {
    return (
        <div className="residential-container">
            <MainCategory>
                <div className="header-section">
                    <h1>Residential Construction</h1>
                    <p>Creating comfortable, functional, and stylish living spaces for families and communities.</p>
                </div>

                <div className="image-section">
                    <img src={Image.BuildingImage1} alt="Residential Construction" className="header-image" />
                </div>

                <div className="content-section">
                    <div className="card">
                        <h2>🏠 Single-Family Homes</h2>
                        <p><b>Bedrooms:</b> Spacious bedrooms, including master suites with ensuite bathrooms, cater to diverse household needs.</p>
                        <p><b>Living Spaces:</b> Versatile living and family rooms with ample natural light provide inviting gathering spaces.</p>
                        <p><b>Kitchens:</b> Functional kitchens with modern appliances, ample counter space, and open-concept designs for seamless integration.</p>
                        <p><b>Bathrooms:</b> Multiple bathrooms, often with luxurious features in master baths, elevate the overall home experience.</p>
                        <p><b>Flooring and Tiles:</b> Diverse flooring options, including hardwood and high-quality tiles for durability and style.</p>
                    </div>

                    <div className="card">
                        <h2>🏘️ Multi-Family Housing</h2>
                        <p><b>Duplex:</b> A building with two separate living units.</p>
                        <p><b>Triplex:</b> A building with three separate living units.</p>
                        <p><b>Quadplex or Fourplex:</b> A building with four separate living units.</p>
                        <p><b>Apartment Buildings:</b> Larger structures with multiple apartments on different floors.</p>
                    </div>

                    <div className="card">
                        <h2>🏢 Apartments</h2>
                        <p><b>One-Bedroom Apartment:</b> A unit with a separate bedroom, living area, kitchen, and bathroom.</p>
                        <p><b>Two-Bedroom Apartment:</b> An apartment with two bedrooms, a living area, kitchen, and one or more bathrooms.</p>
                        <p><b>Penthouse:</b> A luxury apartment typically located on the top floor of a building, offering premium features and amenities.</p>
                        <p><b>Studio Apartment:</b> A single-room unit with a combined living and sleeping area, and a separate bathroom.</p>
                    </div>
                </div>
            </MainCategory>
        </div>
    );
};

export default ResidentialConstruction;
