import React from 'react'
import LocallyOwnedBanner from '../components/LocallyOwned/LocallyOwnedBanner'
import LifeShortSection from '../components/WhyHireUs/LifeShortSection'
import AuthorityBrands from '../components/WhyHireUs/AuthorityBrands'
import LocallyOwnedContent from '../components/LocallyOwned/LocallyOwnedContent'

const LocallyOwned = () => {
  return (
    <div className='w-[100%]'>
<LocallyOwnedBanner/>
<LocallyOwnedContent/>

<LifeShortSection/>
<AuthorityBrands/>

    </div>
  )
}

export default LocallyOwned