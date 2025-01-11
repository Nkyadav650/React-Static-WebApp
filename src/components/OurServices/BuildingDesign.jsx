import React from 'react'
import MainServices from './MainServices'
import Image from '../../buildingImage/Image'

const BuildingDesign = () => {
  return (
    <div>
      <MainServices>
        <div>
          <div className='building-design'>
            <h3>Building Design</h3>
          </div>
          <div className='building-design1'>
            
            <div>
              <p>
                Since our establishment, we have offered integrated design-build services, streamlining the construction process and delivering cost-effective solutions while maintaining design
                integrity.
              </p>
            </div>
            <div>
              <img src={Image.Bangalow1} alt='Error' width="400px" height="350" />
            </div>
          </div>

          <div className='building-design1'>
            <div>
              <img src={Image.BuildingImage6} alt='Error' width="400px" height="350" />
            </div>
            <div>
              <p>
                Welcome to GC Construction's Building Design services, where innovation meets inspiration to bring your vision to life. With our team of skilled architects, engineers, and designers, we transform dreams into tangible structures that stand as testaments to creativity and functionality.
              </p>
            </div>
          </div>

          <div className='building-design1'>
            
            <div>
              <p>
                At GC Construction, we understand that every building tells a story—a story of its purpose, its environment, and its inhabitants. That's why our approach to building design is rooted in collaboration, creativity, and attention to detail. We work closely with our clients to understand their unique needs, aspirations, and constraints, ensuring that each design solution is tailored to their specific requirements.
              </p>
            </div>
            <div>
              <img src={Image.DuplexBuilding} alt='Error' width="400px" height="355" />
            </div>
          </div>


          <div className='building-design1'>
            <div>
              <img src={Image.HotelImage} alt='Error' width="400px" height="356px" />
            </div>
            <div>
              <p>
                From concept development and schematic design to construction documentation and project management, we offer a comprehensive suite of design services to guide you through every stage of the building process. Whether you're planning a residential, commercial, or institutional project, our team has the expertise and experience to deliver innovative solutions that exceed your expectations.
              </p>
            </div>
          </div>

          <div className='building-design1'>
            
            <div>
              <p>
                With a focus on sustainability, efficiency, and aesthetics, our building designs are not only beautiful but also environmentally conscious and cost-effective. We integrate sustainable materials, energy-efficient systems, and passive design strategies to create buildings that are both environmentally responsible and economically viable.
              </p>
            </div>
            <div>
              <img src={Image.BuildingImage7} alt='Error' width="400px" height="350" />
            </div>
          </div>


          <div className='building-design1'>
            <div>
              <img src={Image.hospital4} alt='Error' width="400px" height="350" />
            </div>
            <div>
              <p>
                Experience the power of exceptional design with GC Construction. Let us turn your vision into reality and create spaces that inspire, uplift, and endure for generations to come. Contact us today to learn more about our Building Design services and start your journey toward a better-built environment.
              </p>
            </div>
          </div>
        </div>

      </MainServices>
    </div>

  )
}

export default BuildingDesign