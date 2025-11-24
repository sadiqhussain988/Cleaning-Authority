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
import CompanyHistory from "./pages/CompanyHistory.JSX";
import VisionMission from "./pages/VisionMission";
import Reviews from "./pages/Reviews";
import OwnFranchise from "./pages/OwnFranchise";

import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Special from './pages/SpecialOffer'
import Print from './components/specialoffer/Print'
import OneTimeCleans from './pages/cleaningservices/OneTimeCleans'
import WhyHireUs from './pages/WhyHireUs'
import DetailCleanRotationSystem from './pages/DetailCleanRotationSystem'
import GreenCleaning from './pages/GreenCleaning'
import SatisfactionGuaranted from './pages/SatisfactionGuaranted'
import CleaningFrequencies from './pages/CleaningFrequencies'
import BondedAndInsured from './pages/BondedAndInsured'
import TrainedEmployees from './pages/TrainedEmployees'
import TcaApp from './pages/TcaApp'
import CleaningAuthorityCares from './pages/CleaningAuthorityCares'
import HowToHelp from './pages/HowToHelp'
import LocallyOwned from './pages/LOcallyOwned'

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
      { path: "/companyhistory", element: <CompanyHistory/> },
      { path: "/visionmission", element: <VisionMission/> },
      { path: "/ownfranchise", element: <OwnFranchise/> },
      { path: "/reviews", element: <Reviews/> },
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
      { path: "/one-time-cleans", element: <OneTimeCleans/> },
      { path: "/why-hire-us", element: <WhyHireUs/>},
      { path: "/detail-clean-rotation-system", element: <DetailCleanRotationSystem/>},
      { path: "/green-cleaning", element: <GreenCleaning/>},
      { path: "/satisfaction-guaranteed", element: <SatisfactionGuaranted/>},
      { path: "/cleaning-frequencies", element: <CleaningFrequencies/>},
      { path: "/bonded-insured", element: <BondedAndInsured/>},
      { path: "/blog", element: <BlogPage /> },               // All blogs
      { path: "/blog/:category", element: <BlogPage /> },     // Optional: category view
      { path: "/blog/:category/:slug", element: <BlogPage /> }, // Blog detail
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/faq', element: <Faq /> },
      { path: '/special-offers', element: <Special /> },
      { path: '/print', element: <Print /> },
      { path: '/one-time-cleans', element: <OneTimeCleans /> },
      { path: '/why-hire-us', element: <WhyHireUs /> },
      {
        path: '/detail-clean-rotation-system',
        element: <DetailCleanRotationSystem />
      },
      { path: '/green-cleaning', element: <GreenCleaning /> },
      { path: '/satisfaction-guaranteed', element: <SatisfactionGuaranted /> },
      { path: '/cleaning-frequencies', element: <CleaningFrequencies /> },
      { path: '/bonded-insured', element: <BondedAndInsured /> },
      {
 path: '/fully-trained-employees',
        element: <TrainedEmployees />},
      {
        path: '/mytca-app',
        element: <TcaApp />
      },
       {
        path: '/the-cleaning-authority-cares',
        element: <CleaningAuthorityCares />
      },
      {
        path: '/how-to-help',
        element: <HowToHelp />
      },
      {
        path: '/locally-owned',
        element: <LocallyOwned />
      }
    ]
  }
])

function App () {
  return <RouterProvider router={router} />
}

export default App
