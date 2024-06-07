import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

const ServiceSidebar = () => {
  return (
    <div className='serviceSidebar'>
        <ListGroup>
            <div>
                <Link className="list-group-item" to="/allServices" action>All Services</Link>
            </div>
            <div>
                <Link className="list-group-item" to="/buildingDesign" action>Building Design</Link>
            </div>
            <div>
                <Link className="list-group-item" to="/constructionConsultant" action>Construction Consultant</Link>
            </div>
            <div>
                <Link className="list-group-item" to="/generalContracting" action>General Contracting</Link>
            </div>
            <div>
                <Link className="list-group-item" to="/greenBuilding" action>Green Building</Link>
            </div>
            <div>
                <Link className="list-group-item" to="/houseRenovation" action>House Renovation</Link>
            </div>
            <div>
                <Link className="list-group-item" to="/laminateFlooring" action>Laminate Flooring</Link>
            </div>
            <div>
                <Link className="list-group-item" to="/metalRoofing" action>Metal Roofing</Link>
            </div>
        </ListGroup>
    </div>
  )
}

export default ServiceSidebar