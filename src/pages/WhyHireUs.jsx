import React from 'react'
import HeroSection from '../components/WhyHireUs/HeroSection'
import ChooseUsSection from '../components/WhyHireUs/ChooseUsSection'
import LifeShortSection from '../components/WhyHireUs/LifeShortSection'
import AuthorityBrands from '../components/WhyHireUs/AuthorityBrands'

const WhyHireUs = () => {
  return (
    <div className='w-[100%] px-2'>
        <HeroSection/>
        <ChooseUsSection/>
        <LifeShortSection/>
        <AuthorityBrands/>
    </div>
  )
}

export default WhyHireUs