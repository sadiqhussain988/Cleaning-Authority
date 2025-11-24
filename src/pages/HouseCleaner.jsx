import React from 'react'
import ReliableHoursSection from '../components/job/housecleaner/HousecleanerHero'
import JobDetailsSection from '../components/job/housecleaner/JobDetailsSection'
import JobCtaSection from '../components/job/JobCtaSection'
import BrandsFamilySection from '../components/job/BrandsFamilySection'
import JobNavbar from '../components/job/JobNavbar'

const HouseCleaner = () => {
  return (
    <div>
        <JobNavbar/>
        <ReliableHoursSection/>
        <JobDetailsSection/>
        <JobCtaSection/>
        <BrandsFamilySection/>
        {/* <HousecleanerStorySection/> */}
    </div>
  )
}

export default HouseCleaner