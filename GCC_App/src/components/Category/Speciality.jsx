import React from 'react'
import Image from '../../buildingImage/Image'
import { Link } from 'react-router-dom'
import Base from '../globlePage/Base'
import MainCategory from './MainCategory'

const SpecialtyTrades = () => {
    return (
        <div>
            <MainCategory>
                <div>
                    <h3>Specialty Trades:</h3>
                    <Link to="/category" color="black"><b>Back</b></Link>
                    <img src={Image.BuildingImage4} alt="Error" width="250px" height="250px" />
                </div>
                <div>
                    <ul>
                        <li>Roofing</li>
                        <li>Flooring</li>
                        <li></li>
                    </ul>
                </div>
            </MainCategory>
        </div>
    )
}

export default SpecialtyTrades