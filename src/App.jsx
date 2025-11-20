import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyHireUs from "./pages/WhyHireUs";
import DetailCleanRotationSystem from "./pages/DetailCleanRotationSystem";


const MainLayout = () => {
  return (
    <div>
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
      { path: "/why-hire-us", element: <WhyHireUs/>},
      { path: "/detail-clean-rotation-system", element: <DetailCleanRotationSystem/>},
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
