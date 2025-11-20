import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/common/Header";


const MainLayout = () => {
  return (
    <div>
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
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
