import React from 'react'
import Base from '../globlePage/Base';
import MainAbout from './MainAbout';
import { Col, Row } from 'reactstrap';
import Image from '../../buildingImage/Image';

const WhyChooseUs = () => {
    return (
        <div>

            <MainAbout>


                <div class="why-choose">
                    <div className='why-choose-h3'>
                        <h3>Why Choose GC Construction</h3>
                    </div>
                    <div className="home-whyChoose">
                        <div className="about-whyChoose1">
                            <div>
                                <img src={Image.OfficeBuilding} alt="error" width="300px" height="250px" />
                            </div>
                            <div>
                                <h5>Expertise</h5>
                                <p>
                                    GC Construction since 1995 working, our team brings a wealth of knowledge to every project, ensuring its success from conception to completion.We trust on Technology.
                                </p>
                            </div>

                        </div>

                        <div className="about-whyChoose1">
                            <div>
                                <img src={Image.ConstructionUpperView} alt="error" width="300px" height="250px" />
                            </div>
                            <div>
                                <h5>Customer Approach</h5>
                                <p>
                                    Your satisfaction is our top priority, and we'll go above and beyond to ensure your renovation experience is smooth, enjoyable, and hassle-free.
                                </p>
                            </div>

                        </div>

                        <div className="about-whyChoose1">
                            <div>
                                <img src={Image.ConstructionImage1} alt="error" width="300px" height="250px" />
                            </div>
                            <div>
                                <h5>Affordable Pricing</h5>
                                <p>
                                    We believe that high-quality renovation services should be accessible to everyone, which is why we offer competitive pricing and flexible financing options to suit your budget.
                                </p>
                            </div>
                        </div>

                    </div>



                    <div className="home-whyChoose">
                        <div className="about-whyChoose1">
                            <div>
                                <img src={Image.FactoryImage1} alt="error" width="300px" height="250px" />
                            </div>
                            <div>
                                <h5>Our commitment</h5>
                                <p>
                                    GC Construction, we are dedicated to delivering excellence in every project we undertake. Our commitment is not just a statement; it's a promise we uphold at every stage of our work.
                                </p>
                            </div>
                        </div>

                        <div className="about-whyChoose1">
                            <div>
                                <img src={Image.HouseRenovation3} alt="error" width="300px" height="250px" />
                            </div>
                            <div>
                                <h5>Collaborative Approach</h5>
                                <p>
                                    We value collaboration and work closely with clients, architects, and subcontractors to achieve shared goals and create lasting partnerships.
                                </p>
                            </div>
                        </div>

                        <div className="about-whyChoose1">
                            <div>
                                <img src={Image.BuildingImage2} alt="error" width="300px" height="250px" />
                            </div>
                            <div>
                                <h5>Sustainability</h5>
                                <p>
                                    Committed to environmental responsibility, we integrate sustainable practices into our construction processes, contributing to a greener future.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <p>Discover the difference that quality, integrity, and innovation can make. Choose GC Construction for your next project, and let's build a legacy together.</p>
            </MainAbout>
        </div>
    )
}

export default WhyChooseUs;