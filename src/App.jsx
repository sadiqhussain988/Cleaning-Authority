import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Job from "./pages/Job";
import HouseCleaner from "./pages/HouseCleaner";
import TeamLeader from "./pages/TeamLeader";
import Manager from "./pages/Manager";
import WhyJoin from "./pages/WhyJoin";
import Faq from "./pages/Faq";
import Special from "./pages/SpecialOffer";
import Print from "./components/specialoffer/Print";
import HouseCleaning from "./pages/cleaningservices/HouseCleaning";
import ApartmentCleaning from "./pages/cleaningservices/ApartmentCleaning";
import MoveInMoveOutCleaning from "./pages/cleaningservices/MoveInMoveOutCleaning";
import OneTimeClean from "./pages/cleaningservices/OneTimeClean";
import OfficeCleaning from "./pages/cleaningservices/OfficeCleaning";
import DetailCleanRotationSystem from "./pages/DetailCleanRotationSystem";
import WhyHireUs from "./pages/WhyHireUs";
import BlogPage from "./pages/BlogPage";
import BondedAndInseure from "./pages/BondedAndInsured";
import GreenCleaning  from "./pages/GreenCleaning";
import SatisfactionGuaranted  from "./pages/SatisfactionGuaranted";
import CleaningFrequencies from "./pages/CleaningFrequencies";
import HouseKeeping from "./pages/cleaningservices/HouseKeeping";
import AfterRemodelingCleaning from "./pages/cleaningservices/AfterRemodelingCleaning";
import HomeDisinfection from "./pages/cleaningservices/HomeDisinfection";
import WindowWashing from "./pages/cleaningservices/WindowWashing";
import OvenCleaning from "./pages/cleaningservices/OvenCleaning";
import RefrigeratorCleaning from "./pages/cleaningservices/RefrigeratorCleaning";


const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <Navbar/>
      <Outlet /> 
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/about", element: <About/> },
      { path: "/jobs", element: <Job/> },
      { path: "/jobs/housecleaners", element: <HouseCleaner/> },
      { path: "/jobs/team-leaders-trainers", element: <TeamLeader/> },
      { path: "/jobs/managers", element: <Manager/> },
      { path: "/jobs/why-join", element: <WhyJoin/> },








      { path: "/faq", element: <Faq/> },
      { path: "/special-offers", element: <Special/> },
      { path: "/print", element: <Print/> },
      { path: "/housecleaning", element: <HouseCleaning/> },
      { path: "/apartmentcleaning", element: <ApartmentCleaning/> },
      { path: "/moveinmoveout", element: <MoveInMoveOutCleaning/> },
      { path: "/onetimeclean", element: <OneTimeClean/> },
      { path: "/officeclean", element: <OfficeCleaning/> },
      { path: "/detailrotaion", element: <DetailCleanRotationSystem/> },
      { path: "/whyhireus", element: <WhyHireUs/> },
      { path: "/blogpage", element: <BlogPage/> },
      { path: "/bondedinsured", element: <BondedAndInseure/> },
      { path: "/greencleaning", element: <GreenCleaning/> },
      { path: "/satisfaction", element: <SatisfactionGuaranted/> },
      { path: "/cleaningfrequencies", element: <CleaningFrequencies/> },
      { path: "/housekeeping", element: <HouseKeeping/> },
      { path: "/after-remodeling-cleaning", element: <AfterRemodelingCleaning/> },
      { path: "/home-disinfection-cleaning", element: <HomeDisinfection/> },
      { path: "/window-washing-cleaning", element: <WindowWashing/> },
      { path: "/oven-cleaning", element: <OvenCleaning/> },
      { path: "/refrigenrator-cleaning", element: <RefrigeratorCleaning/> },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
