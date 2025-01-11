import React, { useState, useEffect } from 'react';
import { Link, NavLink as ReactLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Image from '../../buildingImage/Image';
import "./navbar.css";

const GccNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleServices = () => setServiceOpen(!isServiceOpen);
  const toggleCategory = () => setCategoryOpen(!isCategoryOpen);
  const toggleAbout = () => setAboutOpen(!isAboutOpen);

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 131)
    })
  }, [])


  return (
    <div className={`navbar-wrapper container ${scroll ? "main-header scrolled" : "main-header "}`}>
      <Navbar
        style={{ background: "#0c1f38" }} light expand="lg" >
        <NavbarBrand >
          <Link className='navbarBrand' to="/">
            <img src={Image.GClogo} alt="Instagrm" width="50px" height="50px" /><b>GCC</b>
          </Link>
        </NavbarBrand>

        <Collapse navbar><div className='mr-500'>
          <Nav className="me-auto mr-5" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/" style={{ color: "white" }}><b>Home</b></NavLink>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar
                onMouseEnter={toggleAbout} onMouseLeave={toggleAbout} isOpen={isAboutOpen}>
                <DropdownToggle nav style={{ color: "white" }}>
                  <b>About</b>
                </DropdownToggle>
                <DropdownMenu className='end'>
                  <DropdownItem tag={ReactLink} to="/about">About</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/companyProfile" >Company Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/founder">Founder</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/ourMission">Our Mission</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/whyChooseUs">Why Choose Us</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar
                onMouseEnter={toggleServices} onMouseLeave={toggleServices} isOpen={isServiceOpen}>
                <DropdownToggle nav style={{ color: "white" }}>
                  <b>Services</b>
                </DropdownToggle>
                <DropdownMenu className='end'>
                  <DropdownItem tag={ReactLink} to="/allServices">All Services</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/buildingDesign" >Building Design</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/constructionConsultant">Cunstruction Consultant</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/generalContracting">General Contracting</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/greenBuilding">Green Building</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/house_Renovation">House Renovation</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/laminateFlooring">Laminate Flooring</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/metalRoofing">Metal Roofing</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>

            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar onMouseEnter={toggleCategory} onMouseLeave={toggleCategory} isOpen={isCategoryOpen}>
                <DropdownToggle nav >
                  <b>Category</b>
                </DropdownToggle>
                <DropdownMenu className='ends-bar'>
                  <DropdownItem tag={ReactLink} to="/category" >All Category</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/commercial" >Commercial Cunstruction</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/inductrial">Inductrial Construction</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/institutional">Institutional Construction</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/residential">Residential Construction</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/safetyCompliance">Safety Compliance</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={ReactLink} to="/specialty">Specialty</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/contact"><b>Contact</b></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/image"><b>View Image</b></NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink tag={ReactLink} to="/image" style={{ marginLeft: "370px", display: "none" }}><b>Mob:- &nbsp; +91 7879634456</b></NavLink>
            </NavItem>
          </Nav>
        </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default GccNavbar;
