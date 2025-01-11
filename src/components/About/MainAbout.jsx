import React from 'react'
import Base from '../globlePage/Base'
import { Col } from 'reactstrap'
import AboutSidebar from './AboutSidebar'
import Image from '../../buildingImage/Image'

const MainAbout = ({ children }) => {
    return (
        <div>
            <Base>
                <div>
                    <img src={Image.ApartmentConstruction3} alt='Error' width="1296px" height="500px" />
                </div>
                <div className='row m-0 mt-3'>
                    <Col md={2} className='ps-0'>
                        <AboutSidebar />
                    </Col>
                    <Col md={10} className='pe-0'>
                        {children}
                    </Col>


                </div>
            </Base>

        </div>
    )
}

export default MainAbout