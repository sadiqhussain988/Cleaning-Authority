import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import WhyHireUs from './pages/WhyHireUs'
import GreenCleaning from './pages/GreenCleaning'
import SatisfactionGuaranted from './pages/SatisfactionGuaranted'
import CleaningFrequencies from './pages/CleaningFrequencies'

import Job from "./pages/Job";
import HouseCleaner from "./pages/HouseCleaner";
import TeamLeader from "./pages/TeamLeader";
import Manager from "./pages/Manager";
import WhyJoin from "./pages/WhyJoin";
import Faq from "./pages/Faq";
import Special from "./pages/SpecialOffer";
import Print from "./components/specialoffer/Print";
import CompanyHistory from "./pages/CompanyHistory";
import VisionMission from "./pages/VisionMission";
import Reviews from "./pages/Reviews";
import OwnFranchise from "./pages/OwnFranchise";
import TrainedEmployees from './pages/TrainedEmployees';
import TcaApp from './pages/TcaApp';
import CleaningAuthorityCares from './pages/CleaningAuthorityCares';
import HowToHelp from './pages/HowToHelp'
import LocallyOwned from './pages/LocallyOwned';
import HouseCleaning from './pages/cleaningservices/HouseCleaning';
import ApartmentCleaning from './pages/cleaningservices/ApartmentCleaning';
import MoveInMoveOutCleaning from './pages/cleaningservices/MoveInMoveOutCleaning';
import OneTimeClean from './pages/cleaningservices/OneTimeClean';
import OfficeCleaning from './pages/cleaningservices/OfficeCleaning';
import BlogPage from './pages/BlogPage';
import BondedAndInsured from './pages/BondedAndInsured';
import HouseKeeping from './pages/cleaningservices/HouseKeeping';
import AfterRemodelingCleaning from './pages/cleaningservices/AfterRemodelingCleaning';
import HomeDisinfection from './pages/cleaningservices/HomeDisinfection';
import WindowWashing from './pages/cleaningservices/WindowWashing';
import OvenCleaning from './pages/cleaningservices/OvenCleaning';
import RefrigeratorCleaning from './pages/cleaningservices/RefrigeratorCleaning';
import DetailCleanRotationSystem from './pages/DetailCleanRotationSystem';
import ChangeLocation from './pages/ChangeLocation'



const MainLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/about", element: <About/> },
      { path: "/company-history", element: <CompanyHistory/> },
      { path: "/vision-mishion", element: <VisionMission/> },
      { path: "/reviews", element: <Reviews/> },
      { path: "/ownf-franchiese", element: <OwnFranchise/> },
      { path: "/jobs", element: <Job/> },
      { path: "/jobs/why-join", element: <WhyJoin/> },
      { path: "/jobs/housecleaners", element: <HouseCleaner/> },
      { path: "/jobs/team-leaders-trainers", element: <TeamLeader/> },
      { path: "/jobs/managers", element: <Manager/> },
      
      { path: "/faq", element: <Faq/> },
      { path: "/special-offers", element: <Special/> },
      { path: "/print", element: <Print/> },
      { path: "/housecleaning", element: <HouseCleaning/> },
      { path: "/apartmentcleaning", element: <ApartmentCleaning/> },
      { path: "/moveinmoveout", element: <MoveInMoveOutCleaning/> },
      { path: "/onetimeclean", element: <OneTimeClean/> },
      { path: "/officeclean", element: <OfficeCleaning/> },
      { path: "/detail-clean-rotation-system", element: <DetailCleanRotationSystem/> },
      { path: "/whyhireus", element: <WhyHireUs/> },
      { path: "/blogpage", element: <BlogPage/> },
      { path: "/bonded-insured", element: <BondedAndInsured/> },
      { path: "/green-cleaning", element: <GreenCleaning/> },
      { path: "/satisfaction-guaranted", element: <SatisfactionGuaranted/> },
      { path: "/cleaning-frequencies", element: <CleaningFrequencies/> },
      { path: "/fully-trained-employees", element: <TrainedEmployees/> },
      { path: "/mytca-app", element: <TcaApp/> },
      { path: "/the-cleaning-authority-cares", element: <CleaningAuthorityCares/> },
      { path: "/how-to-help", element: <HowToHelp/> },
      { path: "/locally-owned", element: <LocallyOwned/> },
     
      { path: "/housekeeping", element: <HouseKeeping/> },
      { path: "/after-remodeling-cleaning", element: <AfterRemodelingCleaning/> },
      { path: "/home-disinfection-cleaning", element: <HomeDisinfection/> },
      { path: "/window-washing-cleaning", element: <WindowWashing/> },
      { path: "/oven-cleaning", element: <OvenCleaning/> },
      { path: "/refrigenrator-cleaning", element: <RefrigeratorCleaning/> },
      { path: "/change-location", element: <ChangeLocation/> },
      
    ],
  },
]);



function App () {
  return <RouterProvider router={router} />
}

export default App
