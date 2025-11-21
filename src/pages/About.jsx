import React from 'react'
import Cleaning from '../components/about/Cleaning'
import OfferingsGuarantee from '../components/about/OfferingsGuarantee'
import AuthorityCares from '../components/about/AuthorityCares'
import FreeEstimate from '../components/about/FreeEstimate'

function About() {
  return (
    <div>
      <Cleaning/>
      <OfferingsGuarantee/>
      <AuthorityCares/>
      <FreeEstimate/>
    </div>
  )
}

export default About