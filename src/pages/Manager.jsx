import React from 'react'
import ManagementStorySection from '../components/job/manager/ManagementStorySection'
import SeniorManagementRolesSection from '../components/job/manager/SeniorManagementRolesSection'
import JobCtaSection from '../components/job/JobCtaSection'
import BrandsFamilySection from '../components/job/BrandsFamilySection'
import JobNavbar from '../components/job/JobNavbar'

const Manager = () => {
  return (
    <div>
        <JobNavbar/>
        <ManagementStorySection/>
        <SeniorManagementRolesSection/>
        <JobCtaSection/>
        <BrandsFamilySection/>
    </div>
  )
}

export default Manager