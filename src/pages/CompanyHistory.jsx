import React from 'react'
import OurStandard from '../components/companyhistory/OurStandard'
import FreeEstimate from '../components/about/FreeEstimate'
import BrandsFamily from '../components/about/BrandsFamily'
import OurBeginnings from '../components/companyhistory/OurBeginnings'

const CompanyHistory = () => {
  return (
    <div>
     <OurBeginnings/>
      <OurStandard/>
      <FreeEstimate/>
      <BrandsFamily/>
    </div>
  )
}

export default CompanyHistory
