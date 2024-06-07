import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'

const CategorySidebar = () => {
  return (
    <div>
      <ListGroup>
        <div>
          <Link className='list-group-item' to="/category" action>All Category</Link>
        </div>
        <div>
          <Link className='list-group-item' to="/commercial" action>Commercial Construction</Link>
        </div>
        <div>
          <Link className='list-group-item' to="/industrial" action>Industrial Construction</Link>
        </div>
        <div>
          <Link className='list-group-item' to="/institutional" action>Institutional Construction</Link>
        </div>
        <div>
          <Link className='list-group-item' to="/residentail" action>Residential Cunstruction</Link>
        </div>
        <div>
          <Link className='list-group-item' to="/safetyCompliance" action>Safety Compliance</Link>
        </div>
        <div>
          <Link className='list-group-item' to="/specialty" action>Speciality</Link>
        </div>
      </ListGroup>
    </div>
  )
}

export default CategorySidebar;