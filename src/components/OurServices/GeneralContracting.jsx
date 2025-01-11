import React from 'react'
import MainServices from './MainServices'
import Image from '../../buildingImage/Image'

const GeneralContracting = () => {
  return (
    <div>
      <MainServices>
        <div className='general-contracting'><h3>General Contracting</h3></div>
        <div>
          <div className='general-contracting1'>
            <div>
              <img src={Image.HouseRenovation2} alt="error" width="400px" height="320px" />
            </div>
            <div>
              <h4>Project Management</h4>
              <p>As your general contractor, we take full responsibility for overseeing every aspect of your construction project. From initial planning and scheduling to budget management and quality control, our experienced team ensures that your project is executed seamlessly from start to finish.</p>
            </div>
          </div>

          <div className='general-contracting1'>     
            <div>
              <h4>Subcontractor Coordination</h4>
              <p>
                We have established relationships with a network of trusted subcontractors and tradespeople, allowing us to efficiently coordinate all aspects of your project. Whether it's plumbing, electrical, HVAC, or specialized trades, we ensure that all work is completed to the highest standards of quality and craftsmanship.
              </p>
            </div>
            <div>
              <img src={Image.HouseRenovation2} alt="error" width="400px" height="320px" />
            </div>
          </div>


          <div className='general-contracting1'>
            <div>
              <img src={Image.HouseRenovation2} alt="error" width="400px" height="320px" />
            </div>
            <div>
              <h4>Quality Assurance</h4>
              <p>
                Quality is our top priority, and we're committed to delivering superior results on every project. Our dedicated quality assurance team conducts regular inspections and audits to ensure that work meets our rigorous standards and exceeds your expectations.
              </p>
            </div>
          </div>

          <div className='general-contracting1'>
            <div>
              <h4>Cost Management</h4>
              <p>
                We understand the importance of staying within budget, which is why we employ efficient cost management strategies to maximize value and minimize expenses. From accurate cost estimates to proactive budget tracking, we ensure that your project stays on track financially without compromising quality.
              </p>
            </div>
            <div>
              <img src={Image.HouseRenovation2} alt="error" width="400px" height="320px" />
            </div>
          </div>

          <div className='general-contracting1'>
            <div>
              <img src={Image.HouseRenovation2} alt="error" width="400px" height="320px" />
            </div>
            <div>
              <h4>Communication and Transparency</h4>
              <p>
                Communication is key to a successful construction project, which is why we prioritize open and transparent communication with our clients every step of the way. From regular progress updates to prompt response to inquiries and concerns, we keep you informed and involved throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </MainServices>
    </div>

  )
}

export default GeneralContracting