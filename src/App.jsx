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
import WhyHireUs from './pages/WhyHireUs'
import DetailCleanRotationSystem from './pages/DetailCleanRotationSystem'
import GreenCleaning from './pages/GreenCleaning'
import SatisfactionGuaranted from './pages/SatisfactionGuaranted'
import CleaningFrequencies from './pages/CleaningFrequencies'

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
      
      { path: "/faq", element: <Faq/> },
      { path: "/special-offers", element: <Special/> },
      { path: "/print", element: <Print/> },
      { path: "/detailrotaion", element: <DetailCleanRotationSystem/> },
      { path: "/whyhireus", element: <WhyHireUs/> },
      { path: "/greencleaning", element: <GreenCleaning/> },
      { path: "/satisfaction", element: <SatisfactionGuaranted/> },
      
    ],
  },
]);


function App () {
  return <RouterProvider router={router} />
}

export default App
