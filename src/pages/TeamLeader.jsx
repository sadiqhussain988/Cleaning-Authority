import React from 'react'
import MidLevelStorySection from '../components/job/teamleader/MidLevelStorySection'
import LeadershipRolesSection from '../components/job/teamleader/LeadershipRolesSection'
import JobCtaSection from '../components/job/JobCtaSection'
import BrandsFamilySection from '../components/job/BrandsFamilySection'
import JobNavbar from '../components/job/JobNavbar'

const TeamLeader = () => {
  return (
    <div>
        <JobNavbar/>
        <MidLevelStorySection/>
        <LeadershipRolesSection/>
        <JobCtaSection/>
        <BrandsFamilySection/>
    </div>
  )
}

export default TeamLeader