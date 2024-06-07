import React from 'react'
import Base from '../globlePage/Base'
import { Link } from 'react-router-dom'
import MainCategory from './MainCategory'

const SafetyCompliance = () => {
    return (
        <div>
            <MainCategory>
                <div>
                    <h3>Safety and Compliance:</h3>
                    <Link to="/category" color="black"><b>Back</b></Link>
                </div>
                <div>
                    <ul>
                        <li>Inspections</li>
                        <li>Compliance management</li>
                        <li>Safety protocols</li>
                    </ul>
                </div>
            </MainCategory>
        </div>
    )
}

export default SafetyCompliance