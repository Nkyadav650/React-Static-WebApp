import React from "react";
import Base from "../globlePage/Base";
import { Button, Col, Row } from "reactstrap";
import Image from "../../buildingImage/Image";
import ResidentialCunstruction from "./ResidentialCunstruction";
import { Link } from "react-router-dom";
import MainCategory from "./MainCategory";


const Category = () => {
        
    return (
        <MainCategory>
            <>

                <h1>welcome to Category Page</h1>
                <div>
        <Link to="/residentail">
                <h3>Residential Construction:</h3>
                   <Row>
                    
                        <Col >
                            <img src={Image.BuildingImage1} alt="Error" width="250px" height="250px" />
                        </Col>
                        
                    </Row>
                    </Link>
                </div>
                <div>
                <Link to="/commercial">
                    <h3>Commercial Construction:</h3>
                    <Row>
                        <Col>
                            <img src={Image.BuildingImage2} alt="Error" width="250px" height="250px" />
                        </Col>
                    </Row>
                    </Link>
                </div>
                <div>
                <Link to="/institutional">
                    <h3>Institutional Construction:</h3>
                    <Row>
                        <Col>
                            <img src={Image.BuildingImage3} alt="Error" width="250px" height="250px" />
                        </Col>
                    </Row>
                    </Link>
                </div>
                <div>
                   <Link to="/specialty"> <h3>Specialty Trades:</h3>
                    <Row>
                        <Col>
                            <img src={Image.BuildingImage4} alt="Error" width="250px" height="250px" />
                        </Col>
                    </Row></Link>
                </div>
                <div>
                    <Link to="/industrial">
                    <h3>Industrial Construction:</h3>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                    </Link>
                </div>
                <div>
                <Link to="/safetyCompliance">
                <h3>Safety and Compliance:</h3>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Link>
                   
                </div>

            </>
        </MainCategory>
    )
}
export default Category;