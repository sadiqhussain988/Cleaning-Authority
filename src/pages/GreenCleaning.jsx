import React from 'react'
import GreenCleaningBanner from '../components/GreenCleaning/GreenCleaningBanner'
import WhyHireSection from '../components/GreenCleaning/WhyHireSection'
import LifeShortSection from './../components/WhyHireUs/LifeShortSection';
import AuthorityBrands from './../components/WhyHireUs/AuthorityBrands';

const GreenCleaning = () => {
  return (
    <div className='w-[100%]'>
      <GreenCleaningBanner />
      <WhyHireSection />
      <LifeShortSection/>
      <AuthorityBrands/>
      
    </div>
  )
}

export default GreenCleaning
