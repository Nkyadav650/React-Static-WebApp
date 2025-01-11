import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

const AboutSidebar = () => {
    return (
        <div>

            <ListGroup>
                <div className="about-sidebar">

                    <div>
                        <Link className="list-group-item" to="/about" action>About</Link>
                    </div>
                    <div>
                        <Link className="list-group-item" to="/companyProfile" action>Company Profile</Link>
                    </div>
                    <div>
                        <Link className="list-group-item" to="/founder" action>Founder</Link>
                    </div>
                    <div>
                        <Link className="list-group-item" to="/ourMission" action>Our Mission</Link>
                    </div>
                    <div>
                        <Link className="list-group-item" to="/whyChooseUs" action>Why Choose Us</Link>
                    </div>
                </div>
            </ListGroup>


        </div>
    )
}

export default AboutSidebar