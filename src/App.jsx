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
