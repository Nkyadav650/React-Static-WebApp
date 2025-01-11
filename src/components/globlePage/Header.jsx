import React from 'react'
import { Col, Row } from "reactstrap";
import { TbBuildingPavilion } from "react-icons/tb";
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { Card, CardBody } from "reactstrap";
import Image from '../../buildingImage/Image';
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
const Header = () => {
  return (
    <div >
      

      <div className='sub-header'>

        <div className="base-header1">
         <div>
         <img src={Image.BrandLogo} />
         </div>
         
          <div className='header-logo'>
            <PiDotsThreeOutlineVerticalDuotone />
          </div>
        </div>


        <div className='sub-header1'>
          <div className="base-header2">
            <AiFillEnvironment width="20px" height="20px" />&nbsp;&nbsp;<b>Location</b><p>Ambedkar Chawk,Waidhan <br />Singrauli,MP,India</p>
          </div>
          <div className="base-header2">
            <AiFillPhone width="20px" height="20px" />&nbsp;&nbsp;
            <b>Phone</b><p>+91-9826795285<br />+91-7879634456</p>
          </div>
          <div className="base-header3">
            <IoMdMail />&nbsp;&nbsp;
            <b>Email</b><p>nk.yadav650@outlook.com</p>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Header