import React from 'react'
import MainAbout from './MainAbout';
import Image from '../../buildingImage/Image';

const Founder = () => {
  return (
    <div>
      <MainAbout>
        <div>
          <div className='founder-header'><h3>Our Founder</h3></div>
          <p> <b>Name : Gulab Chandra Yadav </b> </p>
            <p> <b>Foundation : 1995</b> </p>
            <p> <b>Header Quater : Ambedkar chawk Waidhan, Singrauli, Madhya Pradesh</b> </p>
          <div>
            <div className='founder-details'>
              <img src={Image.HotelImage1} alt='Error' width="700px" height="400px" />
            </div>
            <div> 
              <p>
               <b> Shree Gulab Chandra Yadav</b> initiated GC Construction in 1995 after dedicating 15 years to refining his expertise in construction within another prominent company. With a wealth of experience amassed over the years, Yadav embarked on his entrepreneurial journey with a clear vision and an unwavering commitment to success. Under Yadav's leadership, GC Construction became synonymous with quality, innovation, and excellence in every project undertaken. Leveraging his extensive background in construction, Yadav laid a solid foundation for the company's rapid growth and prosperity. Throughout its evolution, GC Construction has maintained a reputation for delivering superior results, earning the trust of clients and industry peers alike. Yadav's leadership style, characterized by diligence, foresight, and adaptability, has been instrumental in guiding the company through various challenges and opportunities. Under his guidance, GC Construction diversified its portfolio to encompass a diverse range of projects, from residential developments to commercial complexes and infrastructure ventures. The company's success stands as a testament to Yadav's unwavering commitment to excellence and his relentless pursuit of perfection in every aspect of the business. As GC Construction continues to thrive and innovate under Yadav's leadership, it remains a shining example of entrepreneurial spirit and passion for construction excellence.
              </p>
            </div>
          </div>
        </div>

      </MainAbout>
    </div>
  )
}

export default Founder;