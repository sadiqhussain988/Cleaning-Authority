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
import OneTimeCleans from "./pages/cleaningservices/OneTimeCleans";
import WhyHireUs from "./pages/WhyHireUs";
import DetailCleanRotationSystem from "./pages/DetailCleanRotationSystem";
import GreenCleaning from "./pages/GreenCleaning";
import SatisfactionGuaranted from "./pages/SatisfactionGuaranted";
import CleaningFrequencies from "./pages/CleaningFrequencies";
import BondedAndInsured from "./pages/BondedAndInsured";
import BlogPage from "./pages/BlogPage";


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
      { path: "/faq", element: <Faq/> },
      { path: "/special-offers", element: <Special/> },
      { path: "/print", element: <Print/> },
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
}

export default App;
