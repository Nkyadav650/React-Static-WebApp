import React from "react";
import Base from "./globlePage/Base";
import Image from "../buildingImage/Image";

const ViewImage = () => {
    const images = Object.values(Image); // Assuming Image is an object containing image paths

    return (
        <Base>
            <div className="portfolio-container">
                <h2>Our Portfolio</h2>
                <div className="image-grid">
                    {images.map((imgSrc, index) => (
                        <div key={index} className="portfolio-item">
                            <img src={imgSrc} alt={`Portfolio Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </Base>
    );
};

export default ViewImage;
