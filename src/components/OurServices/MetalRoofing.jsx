import React from 'react'
import MainServices from './MainServices'
import Image from '../../buildingImage/Image'

const MetalRoofing = () => {
  return (
    <div>
      <MainServices>
        <div className='metal-roofing'>
          <h3>Metal Roofing</h3>
        </div>
        <div>
          <div className='metal-roofing1'>
            <p>
              Discover the pinnacle of roofing excellence with GC Construction's metal roofing solutions. Revolutionize your property's protection and aesthetics with our durable, sleek, and environmentally conscious metal roofing options.Unparalleled in strength and longevity, our metal roofs stand as a testament to quality craftsmanship and engineering. Designed to withstand the harshest elements, including extreme weather conditions and corrosion, our metal roofing systems provide your home or business with unparalleled durability and peace of mind.
              But it's not just about durability—our metal roofs also offer unmatched style and versatility. With a wide array of colors, profiles, and finishes to choose from, you can personalize your roofing to match your unique vision and architectural style.
            </p>
          </div>


          <div className='metal-roofing-img'>
            <img src={Image.MetalRoofing} alt='Error' width="800px" height="500" />
          </div>

          <div className='metal-roofing1'>
            <p>
              Furthermore, our metal roofing solutions are environmentally friendly, boasting exceptional energy efficiency and recyclability. By choosing metal roofing from GC Construction, you're not only investing in the long-term protection of your property but also reducing your environmental footprint.

              Installation is seamless and efficient, with our expert team guiding you through every step of the process. From initial consultation to final inspection, we're committed to delivering exceptional service and results that exceed your expectations.

              Elevate your property to new heights with GC Construction's metal roofing solutions. Experience the perfect blend of durability, style, and sustainability, and enjoy lasting protection and beauty for years to come.
            </p>
          </div>
          <div className='metal-roofing-img1'>
            <img src={Image.MetalRoofong1} alt='Error' width="250px" height="250" />
            <img src={Image.MetalRoofong2} alt='Error' width="250px" height="250" />
            <img src={Image.MetalRoofong3} alt='Error' width="250px" height="250" />
            <img src={Image.metalroofing4} alt='Error' width="250px" height="250" />
          </div><br/>

        </div>
      </MainServices>
    </div>
  )
}

export default MetalRoofing