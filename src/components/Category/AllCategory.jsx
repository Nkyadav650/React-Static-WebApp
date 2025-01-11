import React from "react";
import Base from "../globlePage/Base";
import { Button, Col, Row } from "reactstrap";
import Image from "../../buildingImage/Image";
import { Link } from "react-router-dom";
import MainCategory from "./MainCategory";
import './category.css'

const Category = () => {

    return (
        <MainCategory>
            <>
                <div className="all-category">
                    <div>
                        <Link to="/residentail">
                            <h3>Residential Construction:</h3>
                            <Row>

                                <Col >
                                    <img src={Image.ApartmentConstruction2} alt="Error" width="250px" height="250px" />
                                </Col>

                            </Row>
                        </Link>
                    </div>
                    <div>
                        <Link to="/commercial">
                            <h3>Commercial Construction:</h3>
                            <Row>
                                <Col>
                                    <img src={Image.commercialconstruction} alt="Error" width="250px" height="250px" />
                                </Col>
                            </Row>
                        </Link>
                    </div>

                    <div>
                        <Link to="/institutional">
                            <h3>Institutional Construction:</h3>
                            <Row>
                                <Col>
                                    <img src={Image.BuildingImage8} alt="Error" width="250px" height={400} />
                                </Col>
                            </Row>
                        </Link>
                    </div>
                    <div>
                        <Link to="/specialty"> <h3>Specialty Trades:</h3>
                            <Row>
                                <Col>
                                    <img src={Image.buildingConstruction19} alt="Error" width="250px" height="250px" />
                                </Col>
                            </Row></Link>
                    </div>
                    <div>
                        <Link to="/industrial">
                            <h3>Industrial Construction:</h3>
                            <Row>
                                <Col>
                                <img src={Image.FactoryImage1} alt="Error" width="250px" height="250px" />
                                </Col>
                            </Row>
                        </Link>
                    </div>
                    <div>
                        <Link to="/safetyCompliance">
                            <h3>Safety and Compliance:</h3>
                            <Row>
                                <Col>
                                <img src={Image.HouseRenovation} alt="Error" width="250px" height="250px" />
                                </Col>
                            </Row>
                        </Link>

                    </div>
                </div>
            </>
        </MainCategory>
    )
}
export default Category;