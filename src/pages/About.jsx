import React from 'react'
import Cleaning from '../components/about/Cleaning'
import OfferingsGuarantee from '../components/about/OfferingsGuarantee'
import AuthorityCares from '../components/about/AuthorityCares'
import FreeEstimate from '../components/about/FreeEstimate'
import BrandsFamily from '../components/about/BrandsFamily'

function About() {
  return (
    <div>
      <Cleaning/>
      <OfferingsGuarantee/>
      <AuthorityCares/>
      <FreeEstimate/>
      <BrandsFamily/>
    </div>
  )
}

export default About