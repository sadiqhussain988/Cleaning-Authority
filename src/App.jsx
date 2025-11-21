import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage";


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
