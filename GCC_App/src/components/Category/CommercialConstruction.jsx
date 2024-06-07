import React from 'react'
import Base from '../globlePage/Base'
import { Link } from 'react-router-dom'
import Image from '../../buildingImage/Image'
import MainCategory from './MainCategory'

const CommercialConstruction = () => {
    return (
        <div>
            <MainCategory>
                <div>
                <div>
                <h3>Commercial Construction:</h3>
                <Link to="/category" color="black"><b>Back</b></Link>
                
                </div>
                <img src={Image.BuildingImage2} alt="Error" width="800px" height="600px" />
                    <ul>
                        <li><b>Office buildings:</b>
                            <p>Specialization in constructing modern, functional office spaces for businesses and organizations.</p>
                            <p>Expertise in multi-story office complexes, emphasizing efficiency and contemporary design.</p>
                            <p>Capability to customize layouts to suit diverse business needs, including open-plan workspaces, meeting rooms, and amenities.</p>
                        </li>
                        <li><b>Retail centers</b>
                            <p>Proficiency in developing vibrant retail hubs that attract both tenants and customers.</p>
                            <p>Experience in designing versatile retail spaces, including storefronts, shopping arcades, and dining areas.</p>
                            <p>Focus on optimizing traffic flow, maximizing storefront visibility, and ensuring ample parking for shoppers' convenience.</p>
                        </li>
                        <li><b>Hotels</b>
                            <p>Established track record in building hospitality properties that prioritize guest comfort and satisfaction.

                                experience.</p>
                            <p>Expertise in constructing various hotel formats, from boutique accommodations to full-service resorts.</p>
                            <p>Emphasis on creating inviting guest rooms, well-appointed common areas, and recreational facilities to enhance the overall guest</p>
                        </li>
                    </ul>
                </div>
            </MainCategory>
        </div>
    )
}

export default CommercialConstruction