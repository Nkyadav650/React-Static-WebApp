import React from 'react'
import MainServices from './MainServices'
import Image from '../../buildingImage/Image'

const GreenBuilding = () => {
  return (
    <div>
      <MainServices>
        <div>
          <div className='green-building'>
            <h3>Green Building</h3>
          </div>

          <div className='green-building1'>
            <p>
              Committed to sustainability since 1995, we incorporate green building practices and materials to minimize environmental impact and maximize energy efficiency in our projects.
            </p>
          </div>

          <div className='green-building1'>
            <div>
              <p>
                At GC Construction, our dedication to sustainability spans back to 1995, marking the inception of our commitment to green building practices.With an unwavering focus on minimizing environmental impact and maximizing energy efficiency, we integrate sustainable principles and materials into all our projects. Our approach to green building goes beyond mere compliance; it's ingrained in every aspect of our work. From the initial planning stages to the final construction phase, we prioritize eco-friendly solutions that align with our values of environmental stewardship.

              </p>
            </div>
          </div>
          <div className='green-building-img'>
            <img src={Image.greenbuilding3} alt="error" width="600px" height="420px" />
          </div>

          <div className='green-building1'>
            <div>
              <p>
                Through meticulous attention to detail and innovative techniques, we strive to create buildings that not only meet the highest standards of sustainability but also provide long - term benefits to our clients and the planet.Our team of experts is well - versed in the latest advancements in green construction, allowing us to implement cutting - edge strategies that optimize resource utilization and minimize waste. By choosing GC Construction for your project, you're not just investing in quality craftsmanship; you're also making a conscious decision to contribute to a more sustainable future.Join us in our journey towards building a greener, healthier planet, one project at a time.
              </p>
            </div>
          </div>
          <div className='green-building-img1'>
            <img src={Image.greenbuilding1} alt='Error' width="250px" height="250" />
            <img src={Image.greenbuilding4} alt='Error' width="250px" height="250" />
            <img src={Image.greenbuilding2} alt='Error' width="250px" height="250" />
            <img src={Image.greenbuilding5} alt='Error' width="250px" height="250" />
          </div><br />
        </div>




      </MainServices>
    </div>
  )
}

export default GreenBuilding