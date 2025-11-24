import React from 'react'
import JobNavbar from '../components/job/JobNavbar'
import JobHero from '../components/job/JobHero'
import JobJoySection from '../components/job/JobJoySection'
import JobValueSection from '../components/job/JobValueSection'
import JobStorySection from '../components/job/JobStorySection'
import JobMissionSection from '../components/job/JobMissionSection'
import JobCtaSection from '../components/job/JobCtaSection'
import BrandsFamilySection from '../components/job/BrandsFamilySection'

const WhyJoin = () => {
  return (
    <div>
        <JobNavbar/>
        <JobHero/>
        <JobJoySection/>
        <JobValueSection/>
        <JobStorySection/>
        <JobMissionSection/>
        <JobCtaSection/>
        <BrandsFamilySection
        /></div>
  )
}

export default WhyJoin