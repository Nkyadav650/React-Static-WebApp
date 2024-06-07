import React from 'react'
import MainAbout from './MainAbout'
import Image from '../../buildingImage/Image'
import { Col, Row } from 'reactstrap'
const CompanyProfile = () => {
  return (
    <div>
      <MainAbout>
        <div>
          <div className='about-company-profile-h3' ><h3>Company Profile</h3></div>
          <div className='about-company-profile'>
            GC Construction Established in 1995, GC Construction has been a leading name in the construction industry for over two decades.GC Construction is a premier construction company dedicated to delivering excellence in every project we undertake. With a commitment to quality, safety, and innovation, we have established ourselves as a trusted partner in the construction industry.
          </div>
          <div className='history-h3'><h3>History</h3></div>

          <div className='history'>
            <div className='history-years'>
              <div>
                <img src={Image.ConstructionImage2} alt='Error' width="300px" height="261px" />
              </div>
              <div className='history-1995'>
                <h4>1995 - The Foundation</h4>
                <p>In 1995, GC Construction emerged onto the scene with a vision for excellence. Founded by a small team of dedicated individuals, the company started as a modest contractor with minimal manpower and construction equipment. Despite the challenges, their determination laid the groundwork for what was to come.
                </p>
              </div>

            </div>

            <div className='history-years'>
              <div className='history-1999'>
                <h4>1999 - Expansion and Investment</h4>
                <p>Buoyed by early successes, GC Construction wasted no time in expanding its operations. In 1996, the company invested in additional construction equipment and bolstered its workforce, enabling it to take on larger projects and serve more clients with increased efficiency.</p>
              </div>
              <div>
                <img src={Image.HotelConstruction} alt='Error' width="300px" height="250px" />
              </div>
            </div>

            <div className='history-years'>
              <div>
                <img src={Image.ConcreteHouseConstruction} alt='Error' width="300px" height="250px" />
              </div>
              <div className='history-2003'>
                <h4>2003 - Building Partnerships</h4>
                <p>As GC Construction gained momentum, it forged strategic partnerships with suppliers, subcontractors, and clients. These collaborations helped the company secure valuable contracts and establish a reputation for reliability and quality craftsmanship within the industry.
                </p>
              </div>

            </div>

            <div className='history-years'>
              <div className='history-2007'>
                <h4>2007 - Diversification and Specialization</h4>
                <p>Recognizing the need to diversify its portfolio, GC Construction ventured into new sectors and specialized services. Whether it was residential, commercial, or industrial projects, the company demonstrated versatility and adaptability, catering to a wide range of client needs.</p>
              </div>
              <div>
                <img src={Image.Bangalow2} alt='Error' width="300px" height="266px" />
              </div>
            </div>

            <div className='history-years'>
              <div>
                <img src={Image.BuildingImage1} alt='Error' width="300px" height="250px" />
              </div>
              <div className='history-2012'>
                <h4>2012 - Technology Integration</h4>
                <p>In the dawn of the new millennium, GC Construction embraced technological advancements to streamline its operations. From project management software to state-of-the-art machinery, the company leveraged innovation to enhance productivity and precision on the job site.</p>
              </div>

            </div>

            <div className='history-years'>
              <div className='history-2016'>
                <h4>2016 - Sustained Growth and Market Dominance</h4>
                <p>Throughout the early 2000s, GC Construction experienced sustained growth and emerged as a dominant player in the construction market. With an expanding client base and a diverse portfolio of successful projects, the company solidified its position as a trusted industry leader.
                </p>
              </div>
              <div>
                <img src={Image.houseRenovation5} alt='Error' width="300px" height="266px" />
              </div>
            </div>

            <div className='history-years'>
              <div>
                <img src={Image.greenbuilding3} alt='Error' width="300px" height="289px" />
              </div>
              <div className='history-2019'>
                <h4>2019 - Embracing Sustainability and Social Responsibility</h4>
                <p>As environmental concerns took center stage, GC Construction made a commitment to sustainability and social responsibility. Implementing eco-friendly practices, green building techniques, and community engagement initiatives, the company demonstrated its dedication to making a positive impact beyond construction sites.
                </p>
              </div>

            </div>

            <div className='history-years'>
              <div className='history-2020'>
                <h4>2020 - Resilience in the Face of Challenges</h4>
                <p> In the wake of unprecedented challenges such as the global pandemic, GC Construction showcased resilience and adaptability. By implementing stringent safety protocols, remote work solutions, and innovative project management strategies, the company navigated turbulent times while continuing to deliver excellence.
                </p>
              </div>
              <div>
                <img src={Image.ApartmentConstruction1} alt='Error' width="300px" height="289px" />
              </div>

            </div>

            <div className='history-years'>
              <div>
                <img src={Image.HouseRenovation3} alt='Error' width="300px" height="289px" />
              </div>
              <div className='history-present'>
                <h4>Present - Pioneering the Future </h4>
                <p> Today, GC Construction stands at the forefront of the construction industry, poised to pioneer the future of building. With a legacy of innovation, integrity, and unparalleled expertise, the company remains committed to exceeding client expectations and shaping landscapes for generations to come.
                </p>
              </div>


            </div>
          </div>
        </div>
      </MainAbout>
    </div>
  )
}

export default CompanyProfile