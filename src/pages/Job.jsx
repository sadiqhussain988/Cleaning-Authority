import React from 'react'
import JobNavbar from '../components/job/JobNavbar'
import JobHero from '../components/job/jobsection/Hero'
import JobHighlights from '../components/job/jobsection/JobHighlights'
import JobCultureSection from '../components/job/jobsection/JobCultureSection'
import TestimonialSection from '../components/job/jobsection/JobTestimonials'
import JobCategoriesSection from '../components/job/jobsection/JobCategoriesSection'
import JobCtaSection from '../components/job/JobCtaSection'
import BrandsFamilySection from '../components/job/BrandsFamilySection'




const Job = () => {
  return (
    <div>
        <JobNavbar/>
        <JobHero/>
        <JobHighlights/>
         <JobCultureSection />
         <TestimonialSection/>
         <JobCategoriesSection/>
         <JobCtaSection/>
         <BrandsFamilySection/>
        
    </div>
  )
}

export default Job