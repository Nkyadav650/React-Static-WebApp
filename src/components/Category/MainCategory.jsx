import React from 'react'
import CategorySidebar from './CategorySidebar'
import Base from '../globlePage/Base'
import { Col } from 'reactstrap'

const MainCategory = ({children}) => {
    return (
        <div>
            <Base>
                <div className='row m-0 mt-3'>
                    <Col md={2} className='ps-0'>
                        <CategorySidebar />
                    </Col>
                    <Col md={10} className='pe-0'>
                        {children}
                    </Col>
                </div>
            </Base>

        </div>
    )
}

export default MainCategory