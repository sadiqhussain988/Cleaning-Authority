import React from 'react'
import InsuredBanner from '../components/BondedAndInsured/InsuredBanner'
import LifeShortSection from '../components/WhyHireUs/LifeShortSection'
import AuthorityBrands from '../components/WhyHireUs/AuthorityBrands'
import InsuredContent from '../components/BondedAndInsured/InsuredContent'

const BondedAndInsured = () => {
  return (
    <div className='w-[100%]'>

<InsuredBanner/>
<InsuredContent/>
<LifeShortSection/>
<AuthorityBrands/>
    </div>
  )
}

export default BondedAndInsured