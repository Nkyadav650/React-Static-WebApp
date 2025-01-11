import { Col } from "reactstrap";
import Base from "../globlePage/Base";
import './About.css'

import MainAbout from "./MainAbout";
import Image from "../../buildingImage/Image";
const About = () => {
  return (

    <div>
      <MainAbout>
        <section class="about-us">
          <div className="header">
            <h3><b> GC Construction </b></h3>
          </div>

          <div class="container">
            <div className="about">
              <div >
                <p>
                  Welcome to GC Construction, where excellence meets innovation. With a rich history of crafting remarkable structures and a commitment to quality, we stand as a beacon in the construction industry.
                  We believe in turning visions into reality. Whether it's a residential, commercial, or industrial project, we bring expertise, precision, and a passion for construction to every endeavor. Our team of seasoned professionals is dedicated to exceeding client expectations and setting new standards of excellence.

                </p>

              </div>

              <div className="about-child">
              <div>
                    <img src={Image.Bangalow5} alt="error" width="400px" height="745px" />
                  </div>
                <div className="about-sub-child">
                  
                  <h3>Who We Are:</h3>
                  <p>
                    GC Construction is a trusted name in the construction industry, with over four decades of dedicated service. Our team boasts unparalleled expertise, with a diverse project portfolio that spans various markets. Headquartered in Winston-Salem, North Carolina, we also maintain offices in strategic locations such as Savannah, Georgia, and Greenville, South Carolina. Licensed in 11 states, GC Construction stands out as the contractor of choice across the Southeast region.
                  </p>

                  <h3>What We Do:</h3>
                  <p>
                    We don't just build structures; we build trust. Our extensive knowledge encompasses all facets of the construction industry, backed by the invaluable experience of our seasoned professionals. We are committed to assembling great teams, fostering strong relationships, and delivering exceptional projects that leave a legacy of excellence. Our primary focus areas include hospitality, retail, industrial and distribution, historic preservation, education, multi-family, and commercial sectors.
                  </p>

                  <h3>How We Do It:</h3>
                  <p>
                    At the heart of our operations lies an unwavering commitment to our core values, upheld each day without compromise. GC Construction prioritizes the well-being of our people, partners, workmanship, communities, and the relationships we cultivate. Through continuous investment in our teams and a steadfast dedication to integrity and excellence, we ensure that our organization is prepared for the challenges and opportunities of the future.
                  </p>

                  <h3>Why We Do It:</h3>
                  <p>
                    Our work isn't just about projects; it's about making a meaningful impact. We are driven by a genuine concern for the legacy we leave behind and the positive influence we have on our communities. Recognizing that relationships are the cornerstone of our success, we place immense value on our people. By nurturing an environment that is both fulfilling and enjoyable, we lay the groundwork for adding value to both our personal and professional endeavors, ensuring that every project we undertake is infused with purpose and passion.
                  </p>
                </div>



              </div>

            </div>


            <div class="core-values">
              <h3>Our Core Values</h3>

              <div className="core-values1">
                <div>
                  <strong>Integrity:</strong>

                  We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.

                </div>
                <div className='core-values1-img1'>
                  <img src={Image.ApartmentConstruction1} alt='Error' width="250px" height="250" />
                  <img src={Image.CommercialConstruction} alt='Error' width="250px" height="250" />
                  <img src={Image.ConstructionImage1} alt='Error' width="250px" height="250" />
                  <img src={Image.ConstructionImage2} alt='Error' width="250px" height="250" />
                </div><br />
              </div>

              <div className="core-values1">
                <div>
                  <strong>Quality:</strong>

                  We are committed to delivering top-notch craftsmanship, utilizing cutting-edge technology and the finest materials available.

                </div>

                <div className='core-values1-img1'>
                  <img src={Image.constructiondrowing} alt='Error' width="250px" height="250" />
                  <img src={Image.constructiondrowing1} alt='Error' width="250px" height="250" />
                  <img src={Image.constructiondrowing2} alt='Error' width="250px" height="250" />
                  <img src={Image.constructiondrowing3} alt='Error' width="250px" height="250" />
                </div><br />
              </div>

              <div className="core-values1">
                <div>
                  <strong>Innovation:</strong>

                  Embracing the latest trends and technologies, we continuously strive for innovative solutions that set us apart in the industry.

                </div>
                <div className='core-values1-img1'>
                  <img src={Image.Bangalow4} alt='Error' width="250px" height="250" />
                  <img src={Image.MetalRoofong2} alt='Error' width="250px" height="250" />
                  <img src={Image.flat1} alt='Error' width="250px" height="250" />
                  <img src={Image.houseRenovation3} alt='Error' width="250px" height="250" />
                </div><br />
              </div>

              <div className="core-values1">
                <div>
                  <strong>Client Satisfaction</strong>

                  Our clients are at the heart of everything we do. We prioritize communication, understanding, and exceeding their expectations.

                </div>
                <div className='core-values1-img1'>
                  <img src={Image.BuildingImage6} alt='Error' width="250px" height="250" />
                  <img src={Image.BuildingImage7} alt='Error' width="250px" height="250" />
                  <img src={Image.BuildingImage8} alt='Error' width="250px" height="250" />
                  <img src={Image.BuildingImage9} alt='Error' width="250px" height="250" />
                </div><br />
              </div>

            </div>

            <p>Discover the difference that quality, integrity, and innovation can make. Choose GC Construction for your next project, and let's build a legacy together.</p>
          </div>
        </section>
      </MainAbout>
    </div>

  )
}
export default About;