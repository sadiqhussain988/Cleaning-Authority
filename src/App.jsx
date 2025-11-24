import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
// import Job from "./pages/Job";
import HouseCleaning from "./pages/cleaningservices/HouseCleaning";
import AfterRemodelingCleaning from "./pages/cleaningservices/AfterRemodelingCleaning";
import ApartmentCleaning from "./pages/cleaningservices/ApartmentCleaning";
import HomeDisinfection from "./pages/cleaningservices/HomeDisinfection";
import HouseKeeping from "./pages/cleaningservices/HouseKeeping";
import MoveInMoveOutCleaning from "./pages/cleaningservices/MoveInMoveOutCleaning";
import OfficeCleaning from "./pages/cleaningservices/OfficeCleaning";
import OneTimeClean from "./pages/cleaningservices/OneTimeClean";
import OvenCleaning from "./pages/cleaningservices/OvenCleaning";
import RefrigeratorCleaning from "./pages/cleaningservices/RefrigeratorCleaning";
import WindowWashing from "./pages/cleaningservices/WindowWashing";
// import TeamLeader from "./pages/TeamLeader";
// import Manager from "./pages/Manager";
// import WhyJoin from "./pages/WhyJoin";
import Faq from "./pages/Faq";
import Special from "./pages/SpecialOffer";
import Print from "./components/specialoffer/Print";
import CompanyHistory from "./pages/CompanyHistory.JSX";
import VisionMission from "./pages/VisionMission";
import Reviews from "./pages/Reviews";
import OwnFranchise from "./pages/OwnFranchise";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/companyhistory", element: <CompanyHistory /> },
      { path: "/visionmission", element: <VisionMission /> },
      { path: "/ownfranchise", element: <OwnFranchise /> },
      { path: "/reviews", element: <Reviews /> },
      { path: "/faq", element: <Faq /> },
      { path: "/special-offers", element: <Special /> },
      { path: "/print", element: <Print /> },
      { path: "/housecleaning", element: <HouseCleaning /> },
      { path: "/apartmentcleaning", element: <ApartmentCleaning /> },
      { path: "/moveinmoveout", element: <MoveInMoveOutCleaning /> },
      { path: "/onetimeclean", element: <OneTimeClean /> },
      { path: "/officeclean", element: <OfficeCleaning /> },
      // { path: "/detailrotaion", element: <DetailCleanRotationSystem/> },
      // { path: "/whyhireus", element: <WhyHireUs/> },
      // { path: "/blogpage", element: <BlogPage/> },
      // { path: "/bondedinsured", element: <BondedAndInseure/> },
      // { path: "/greencleaning", element: <GreenCleaning/> },
      // { path: "/satisfaction", element: <SatisfactionGuaranted/> },
      // { path: "/cleaningfrequencies", element: <CleaningFrequencies/> },
      { path: "/housekeeping", element: <HouseKeeping /> },
      {
        path: "/after-remodeling-cleaning",
        element: <AfterRemodelingCleaning />,
      },
      { path: "/home-disinfection-cleaning", element: <HomeDisinfection /> },
      { path: "/window-washing-cleaning", element: <WindowWashing /> },
      { path: "/oven-cleaning", element: <OvenCleaning /> },
      { path: "/refrigenrator-cleaning", element: <RefrigeratorCleaning /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
