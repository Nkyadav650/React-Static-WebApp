import React from "react";
import Base from "../globlePage/Base";
import { Link } from "react-router-dom";
import Image from "../../buildingImage/Image";
import MainCategory from "./MainCategory";
const ResidentialCunstruction = () => {
    return (
        <div>

            <MainCategory>
                <ul>
                    <div>
                        <h3>Residential Construction:</h3>
                        <Link to="/category" color="black"><b>Back</b></Link>
                        <img src={Image.BuildingImage1} alt="Error" width="800px" height="600px" />
                    </div>
                    <div>
                    <li><b>Single-family homes</b></li>
                    <p><b>Bedrooms:</b> Spacious bedrooms, including master suites with ensuite bathrooms, cater to diverse household needs.</p>
                    <p><b>Living Spaces:</b> Versatile living and family rooms with ample natural light provide inviting gathering spaces.</p>

                    <p> <b>Kitchens:</b> Functional kitchens with modern appliances, ample counter space, and open-concept designs for seamless integration.</p>

                    <p><b>Bathrooms:</b> Multiple bathrooms, often with luxurious features in master baths, elevate the overall home experience.</p>

                    <p><b>Flooring and Tiles:</b> Diverse flooring options, including hardwood and high-quality tiles for durability and style.</p>

                    <li><b>Multi-family housing</b></li>
                    <p>
                        <b>Duplex:</b>  A building with two separate living units.
                    </p>
                    <p>
                        <b>Triplex:</b>  A building with three separate living units.
                    </p>
                    <p>
                        <b>Quadplex or Fourplex:</b>  A building with four separate living units.
                    </p>
                    <p>
                        <b>Apartment Buildings:</b>  Larger structures with multiple apartments on different floors.
                    </p>
                    <li><b>Apartments</b></li>
                    <p>
                        <b>One-Bedroom Apartment:</b>   A unit with a separate bedroom, living area, kitchen, and bathroom.
                        bathrooms.
                    </p>
                    <p>
                        <b>Two-Bedroom Apartment:</b>  An apartment with two bedrooms, a living area, kitchen, and one or more
                    </p>
                    <p>
                        <b> Penthouse:</b> A luxury apartment typically located on the top floor of a building, offering premium features and amenities.
                    </p>
                    <p>
                        <b>Studio Apartment:</b>  A single-room unit with a combined living and sleeping area, and a separate bathroom.
                    </p>
                
                    </div>
                    </ul>   
            </MainCategory>
        </div>


    )
}
export default ResidentialCunstruction;