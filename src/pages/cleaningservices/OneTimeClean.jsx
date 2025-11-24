import React from 'react'
import Header from '../../components/ourcleaningservices/onetimecleaning/Header'
import ExpertHouseCleaning from '../../components/ourcleaningservices/housecleaning/ExpertHouseCleaning'
import Testimonial from '../../components/ourcleaningservices/housecleaning/Testimonial'
import OneTimeCleaning from '../../components/ourcleaningservices/onetimecleaning/OneTimeCleaning'

function OneTimeClean() {
  return (
    <div>
        <Header/>
        <OneTimeCleaning/>
        <Testimonial/>
    </div>
  )
}

export default OneTimeClean