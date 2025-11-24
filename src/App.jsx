import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
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
      { path: "/companyhistory", element: <CompanyHistory/> },
      { path: "/visionmission", element: <VisionMission/> },
      { path: "/ownfranchise", element: <OwnFranchise/> },
      { path: "/reviews", element: <Reviews/> },
      { path: "/faq", element: <Faq/> },
      { path: "/special-offers", element: <Special/> },
      { path: "/print", element: <Print/> },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
