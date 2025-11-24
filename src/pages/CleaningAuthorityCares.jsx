import React from 'react'
import CleaningAuthorityBanner from '../components/CleaningAuthorityCares/CleaningAuthorityBanner'
import CleaningAuthorityContent from '../components/CleaningAuthorityCares/CleaningAuthorityContent'
import LifeShortSection from '../components/WhyHireUs/LifeShortSection'
import AuthorityBrands from '../components/WhyHireUs/AuthorityBrands'

const CleaningAuthorityCares = () => {
  return (
    <div className='w-[100%]'>
        <CleaningAuthorityBanner/>
        <CleaningAuthorityContent/>
        <LifeShortSection/>
        <AuthorityBrands/>

    </div>
  )
}

export default CleaningAuthorityCares