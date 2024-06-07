import React from 'react'
import ServiceSidebar from './ServiceSidebar'
import Base from '../globlePage/Base'
import { Col } from 'reactstrap'
import Image from '../../buildingImage/Image'

const MainServices = ({ children }) => {
  return (
    <div>
      <Base>
        <div>
          <img src={Image.Bangalow1} alt='Error' width="1296px" height="500" />
        </div>
        <div className='row m-0 mt-3'>
          <Col md={2} className='ps-0'id='serviceSidebar'>
            <ServiceSidebar />
          </Col>
          <Col md={10} className='pe-0'>
            {children}
          </Col>


        </div>
      </Base>

    </div>
  )
}

export default MainServices