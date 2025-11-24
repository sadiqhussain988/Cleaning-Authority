import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Job from "./pages/Job";
import HouseCleaner from "./pages/HouseCleaner";
import TeamLeader from "./pages/TeamLeader";
import Manager from "./pages/Manager";
import WhyJoin from "./pages/WhyJoin";


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
      { path: "/jobs", element: <Job/> },
      { path: "/jobs/housecleaners", element: <HouseCleaner/> },
      { path: "/jobs/team-leaders-trainers", element: <TeamLeader/> },
      { path: "/jobs/managers", element: <Manager/> },
      { path: "/jobs/why-join", element: <WhyJoin/> },







      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
