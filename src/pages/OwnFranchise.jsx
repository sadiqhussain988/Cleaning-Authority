import React from 'react'
import BecomeOwner from '../components/franchise/BecomeOwner'
import FeatureInvestment from '../components/franchise/FeatureInvestment'
import ServiceIndustry from '../components/franchise/ServiceIndustry'
import BusinessFranchise from '../components/franchise/BusinessFranchise'
import StepSuccess from '../components/franchise/StepSuccess'
import OutCompetition from '../components/franchise/OutCompetition'
import ClientTestimonials from '../components/reviews/ClientTestimonials'
import BrandsFamily from '../components/about/BrandsFamily'

const OwnFranchise = () => {
  return (
    <div>
      <BecomeOwner/>
      <FeatureInvestment/>
      <ServiceIndustry/>
      <BusinessFranchise/>
      <StepSuccess/>
      <OutCompetition/>
      <ClientTestimonials/>
      <BrandsFamily/>
    </div>
  )
}

export default OwnFranchise
