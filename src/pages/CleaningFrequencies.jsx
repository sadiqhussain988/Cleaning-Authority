import React from 'react'
import CleaningBanner from '../components/CleaningFrequencies/CleaningBanner'
import LifeShortSection from './../components/WhyHireUs/LifeShortSection';
import AuthorityBrands from './../components/WhyHireUs/AuthorityBrands';
import CleaningContent from '../components/CleaningFrequencies/CleaningContent';

const CleaningFrequencies = () => {
  return (
    <div className='w-[100%]'>

        <CleaningBanner/>
        <CleaningContent/>
        <LifeShortSection/>
        <AuthorityBrands/>
        </div>
  )
}

export default CleaningFrequencies