import React from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About/About';
import CompanyProfile from './components/About/CompanyProfile';
import Founder from './components/About/Founder';
import OurMission from './components/About/OurMission';
import WhyChooseUs from './components/About/WhyChooseUs';
import AllCategory from './components/Category/AllCategory';
import Contact from './components/Contact';
import ViewImage from './components/ViewImage';
import ResidentialCunstruction from './components/Category/ResidentialCunstruction';
import CommercialConstruction from './components/Category/CommercialConstruction';
import InstitutionalConstruction from './components/Category/InstitutionalConstruction';
import SpecialtyTrades from './components/Category/Speciality';
import IndustrialConstruction from './components/Category/IndustrialConstruction';
import SafetyCompliance from './components/Category/SafetyCompliance';
import AllServices from './components/OurServices/AllServices';
import BuildingDesign from './components/OurServices/BuildingDesign';
import ConstructionConsultant from './components/OurServices/ConstructionConsultant';
import GeneralContracting from './components/OurServices/GeneralContracting';
import GreenBuilding from './components/OurServices/GreenBuilding';
import House_Renovation from './components/OurServices/House_Renovation';
import LaminateFlooring from './components/OurServices/LaminateFlooring';
import MetalRoofing from './components/OurServices/MetalRoofing';
import Shop from './components/Shop/Shop';
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/image' element={<ViewImage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />

          {/* About */}
          <Route path='/about' element={<About />} />
          <Route path='/companyProfile' element={<CompanyProfile />} />
          <Route path='/founder' element={<Founder />} />
          <Route path='/ourMission' element={<OurMission />} />
          <Route path='/whyChooseUs' element={<WhyChooseUs />} />

          {/* Category */}
          <Route path='/category' element={<AllCategory />} />
          <Route path='/commercial' element={<CommercialConstruction />} />
          <Route path='/industrial' element={<IndustrialConstruction />} />
          <Route path='/institutional' element={<InstitutionalConstruction />} />
          <Route path='/residentail' element={<ResidentialCunstruction />} />
          <Route path='/safetyCompliance' element={<SafetyCompliance />} />
          <Route path='/specialty' element={<SpecialtyTrades />} />

          {/* OurServices */}
          <Route path='/allServices' element={<AllServices />} />
          <Route path='/buildingDesign' element={<BuildingDesign />} />
          <Route path='/constructionConsultant' element={<ConstructionConsultant />} />
          <Route path='/generalContracting' element={<GeneralContracting />} />
          <Route path='/greenBuilding' element={<GreenBuilding />} />
          <Route path='/houseRenovation' element={<House_Renovation />} />
          <Route path='/laminateFlooring' element={<LaminateFlooring />} />
          <Route path='/MetalRoofing' element={<MetalRoofing />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
