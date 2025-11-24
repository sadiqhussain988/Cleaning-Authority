import React from 'react'
import HowToHelpBanner from '../components/HowToHelp/HowToHelpBanner'
import LifeShortSection from '../components/WhyHireUs/LifeShortSection'
import AuthorityBrands from '../components/WhyHireUs/AuthorityBrands'
import HowToHelpContent from '../components/HowToHelp/HowToHelpContent'

const HowToHelp = () => {
  return (
    <div className='w-[100%]'>
<HowToHelpBanner/>
<HowToHelpContent/>
<LifeShortSection/>
<AuthorityBrands/>
    </div>
  )
}

export default HowToHelp