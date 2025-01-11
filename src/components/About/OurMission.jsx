import React from 'react'
import MainAbout from './MainAbout'
import Image from '../../buildingImage/Image'

const OurMission = () => {
  return (
    <div>
      <MainAbout>
        <div className='our-mission-h3'><h3>Our Mission</h3></div>
        <div className='our-mission'>
          <div>
            <p>
              At GC Construction, our mission is clear: we aim to deliver superior workmanship and customer service while upholding the utmost standards of professionalism, honesty, and fairness in all our relationships. Our commitment is not only to our customers but also to our employees and vendors.
            </p>
          </div>
          <div>
            <img src={Image.DuplexBuilding2} alt='Error' width="300px" height="250px" />
          </div>
        </div>
        <div className='our-mission'>
        <div>
            <img src={Image.KichenBuilding} alt='Error' width="300px" height="250px" />
          </div>
          <div>
            <p>
              We strive for growth by consistently offering valuable products, services, and solutions to our existing markets while exploring opportunities to expand into new areas that align with our expertise and customer needs.
            </p>
          </div>
          
        </div>

        <div className='our-mission'>
          <div>
            <p>
              As a contractor, we endeavor to be the preferred choice by providing top-notch construction services within an atmosphere of integrity and trust. Our goal is to lead the industry by leveraging our internal expertise, prioritizing safety, offering a comprehensive range of services, and fostering a familial approach to conducting business.
            </p>
          </div>
          <div>
            <img src={Image.BuildingImage5} alt='Error' width="300px" height="250px" />
          </div>
        </div>
        <div className='our-mission'>
        <div>
            <img src={Image.parkimage1} alt='Error' width="300px" height="250px" />
          </div>
          <div>
            <p>
              Our core values revolve around being the preferred builder and employer, maintaining the highest standards of ethics, quality, and safety, and achieving a harmonious balance of responsibility, profitability, and community involvement.
            </p>
          </div>
          
        </div>
        <div className='our-mission'>
          <div>
            <p>
              We are dedicated to supporting and uplifting local communities through our innovative building solutions and premium materials, thereby enhancing their everyday lives. Furthermore, we are fully committed to operating in an environmentally and socially responsible manner, ensuring minimal impact on the environment across all our operations.

            </p>
          </div>
          <div>
            <img src={Image.CommercialBuilding} alt='Error' width="300px" height="250px" />
          </div>
        </div>
      </MainAbout>
    </div>
  )
}

export default OurMission