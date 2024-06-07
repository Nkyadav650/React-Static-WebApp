import React from "react";
import GccNavbar from "./GccNavbar";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './base.css'

import Header from "./Header";

const Base = ({ Title = "Welcome to GC Construction", children }) => {
  return (
    <>
      <div class="base">
        <div>
          <Header />
        </div>
        <GccNavbar />
        <div className="">
          <div className="mainbody">

            <div className="children container">

              {children}
            </div>
          </div>
          <div >
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default Base;