
import React from "react";
import Base from "./globlePage/Base";
import ImageSlider from "./ImageSlider";
import { RiTeamLine } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import './home.css';
import { Col, Row } from "reactstrap";
import Image from "../buildingImage/Image";
import { IoLogoWhatsapp } from "react-icons/io";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/jquery/dist/jquery.js";
import "../../node_modules/slick-carousel/slick/slick.js";
import "../../node_modules/font-awesome/css/font-awesome.css";
const Home = () => {
  var serviceSlider = {
    dots: false,
    infinite: true,
    autoplay:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
  }
  return (
    <>
      <Base>
        <div>
          <ImageSlider />
        </div>
        <div >
          {/* Item nox after image slider */}
          <div className="home-super-box">
            <Col md={4}>
              <div className="home-icons"> <RiTeamLine /></div>
              <div className="home-box">
                <h3>Awesome staff</h3>
                <p>At GC Construction, we take pride in our team of skilled trades people who possess a diverse range of expertise and craftsmanship. They are supirior on technologies and designs.we believe that the foundation of our success lies in the dedication. expertise, and passion.  </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="home-icons"> <FaRegBuilding /></div>
              <div className="home-box">
                <h3>General Builder</h3>
                <p> GC Construction, we don't just build structures; we build legacies. With a steadfast commitment to quality, innovation, and sustainability, we are shaping the future of construction one project at a time.we recognize the importance of sustainable practices in modern construction </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="home-icons"><FaHome /></div>

              <div className="home-box">
                <h3>House Extensions</h3>
                <p>GC Construction, we understand that house extensions are more than just additional square footage; they're a reflection of your lifestyle and aspirations. That's why we take a collaborative approach, working closely with you to understand your needs, preferences, and budget.</p>
              </div>
            </Col>

          </div>

          {/* after item box We build everything  */}

          <div className="home-build-everything">
            <h1>We Build Everything</h1>
            <p>GC Construction company is a business entity that specializes in the planning, design, and execution of various construction projects. These projects can range from residential and commercial buildings to infrastructure development, such as roads, bridges, and utilities. The primary goal of a construction company is to transform architectural and engineering plans into physical structures that meet safety, quality, and functional requirements.?</p>

          </div>
          <img src={Image.OfficeBuilding4} alt="error" width="100%" height="300px" />

          {/* Why choose Us  after we build every thing */}

          <div>
            <div className="home-whyChoose-header">
              <h2>Why Choose Us</h2>
            </div>

            <div className="home-whyChoose">
              <Row>
                <Col md={4}>
                  <div className="home-whyChoose1">
                  <img src={Image.OfficeBuilding} alt="error" width="300px" height="250px" />
                    <h3>Expertise</h3>
                    <p> GC Construction since 1995 working, our team brings a wealth of knowledge to every project, ensuring its success from conception to completion.We trust on Technology</p>
                    
                  </div>
                </Col>
                <Col md={4}>
                  <div className="home-whyChoose1">
                  <img src={Image.ApartmentConstruction3} alt="error" width="300px" height="250px" />
                    <h3>Our commitment</h3>
                    <p> GC Construction, we are dedicated to delivering excellence in every project we undertake. Our commitment is not just a statement; it's a promise we uphold at every stage of our work.</p>
                  </div>
                </Col>
                <Col md={4}>

                  <div className="home-whyChoose1">
                  <img src={Image.ConstructionImage1} alt="error" width="300px" height="250px" />
                    <h3>Affordable Pricing</h3>
                    <p>We believe that high-quality renovation services should be accessible to everyone, which is why we offer competitive pricing and flexible financing options to suit your budget.</p>
                  </div>
                </Col>
              </Row>

            </div>
            <div className="home-whyChoose">

              <Row>
                <Col md={4}>
                  <div className="home-whyChoose1">
                  <img src={Image.ConstructionUpperView} alt="error" width="300px" height="250px" />
                    <h3>Customer Approach</h3>
                    <p>Your satisfaction is our top priority, and we'll go above and beyond to ensure your renovation experience is smooth, enjoyable, and hassle-free.</p>
                   
                  </div>
                </Col>
                <Col md={4}>

                  <div className="home-whyChoose1">
                  <img src={Image.HouseRenovation3} alt="error" width="300px" height="250px" />
                    <h3>Collaborative Approach</h3>
                    <p>We value collaboration and work closely with clients, architects, and subcontractors to achieve shared goals and create lasting partnerships.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="home-whyChoose1">
                  <img src={Image.BuildingImage2} alt="error" width="300px" height="250px" />
                    <h3>Sustainability</h3>
                    <p>Committed to environmental responsibility, we integrate sustainable practices into our construction processes, contributing to a greener future.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* OutLine */}
          <div className="outLine">
            <p>Discover the difference that quality, integrity, and innovation can make. Choose GC Construction for your next project, and let's build a legacy together.</p>
          </div>

          {/* Our Services after Why choose us*/}

          <div>
            <div className="home-services">
              <h2>Our Services</h2>
            </div>
          


            <Slider className="home-services1" {...serviceSlider}>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.HouseRenovation2} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>General Contracting</h3>
                  <p>Whether you're planning a residential renovation, commercial construction, or industrial project, GC Construction is here to turn your vision into reality. Contact us today to schedule a consultation and learn more about our general contracting services.</p>
        
                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.HouseHallRenovation} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>House Renovation</h3>
                  <p>We offer all types of Renovation services, which includes Kitchen Renovation, Bathroom Renovation, Full Home Renovation, Tiling work, Brick Work, Fabrication work, Seepage work, Roofing, Area extension, Build Extra Room, Addition of Floor.</p>
                  

                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.MultiFamilyHomes2} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>Residential Construction</h3>
                  <p>Our residential construction services are all about creating, renovating, or expanding homes or spaces up to four floors high, meant for people to live in. We make sure every project fits your needs perfectly, focusing on top-notch quality, skilled craftsmanship.</p>

                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.CommercialBuilding} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>Commercial Construction</h3>
                  <p>We're experts in building all sorts of commercial spaces like offices, stores, hospitals, schools, hostels, warehouses, and more. We know these buildings have special jobs to do, so we make sure they're designed just right to fit each business's needs. </p>

                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.ApartmentConstruction2} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>Apartment Construction</h3>
                  <p>With a wealth of expertise in apartment construction, we excel in crafting exceptional multi-unit residential spaces. Whether envisioning a cozy complex or a towering edifice, we possess the finesse to realize your dreams. </p>

                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.hospital4} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>Hospital </h3>
                  <p>We specialize in hospital construction, dedicated to building state-of-the-art medical facilities that prioritize patient care and safety. From planning and design to construction and completion, we handle every aspect of hospital construction with precision and expertise. </p>

                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.HouseFlooring1} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>House Flooring</h3>
                  <p> GC Construction is specialize in installing durable and stylish flooring options that suit your preferences and lifestyle. Whether you prefer hardwood, laminate, tile, or carpet, we provide expert installation and attention to detail for you.</p>

                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.ConcreteHouseConstruction} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>Schools & College</h3>
                  <p>We specialize in creating modern educational facilities that inspire learning and innovation.Our team is experienced in designing and constructing classrooms, laboratories, libraries, and recreational areas that meet the unique needs of students, faculty, and staff. </p>

                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.TIlesInstallment} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>Tiling installment</h3>
                  <p>We excels in tiling installation. Our expert team ensures precise and professional installation for floors, walls, and backsplashes. With a focus on quality craftsmanship and attention to detail, we transform spaces into stunning works of art using a variety of materials.</p>

                </div>

              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.Renovation} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>Special Designs</h3>
                  <p> It's unique architectural features, custom interiors, or innovative layouts, we thrive on turning your vision into reality. Our experienced team works closely with you to understand your preferences and requirements, ensuring that every detail is meticulously executed.</p>

                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.ConstructionBuilding} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>Hotel Construction</h3>
                  <p>We specialize in creating upscale Hotel establishments that prioritize comfort, luxury, and functionality. From boutique hotels to large resorts, our team has the expertise to handle every aspect of construction, from planning and design to execution and completion.</p>

                </div>
              </Col>
              <Col md={4}>
                <div className="home-services-box">
                  <img src={Image.RetailCenter1} alt="error" width="410px" height="250px" />
                  <br /><br />
                  <h3>Park & Stadium</h3>
                  <p>Creating dynamic outdoor spaces that inspire and engage communities. Whether it's building a new sports stadium, upgrading existing facilities, or constructing recreational parks, our team is equipped to handle projects of any scale. </p>

                </div>
              </Col>
            </Slider>

          </div>
          <div className="home-question">
            <div>
              <h2>Do you Have any Question </h2>
              <h2>Feel free to Ask</h2>
            </div>
            <div >
              <b>Phone</b><p>+91-9826795285<br />+91-7879634456</p>
            </div>
            <div className="home-whatsapp-icon"><IoLogoWhatsapp /></div>
          </div>

        </div>

      </Base>
    </>
  )
};
export default Home;