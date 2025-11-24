import React from 'react'
import SatisfactionBanner from '../components/SatisfactionGuaranted/SatisfactionBanner'
import SatisfactionContent from '../components/SatisfactionGuaranted/SatisfactionContent'
import LifeShortSection from '../components/WhyHireUs/LifeShortSection'
import AuthorityBrands from '../components/WhyHireUs/AuthorityBrands'

const SatisfactionGuaranted = () => {
  return (
    <div className='w-[100%]'>

       <SatisfactionBanner/> 
       <SatisfactionContent/>
       <LifeShortSection/>
       <AuthorityBrands/>
    </div>
  )
}

export default SatisfactionGuaranted