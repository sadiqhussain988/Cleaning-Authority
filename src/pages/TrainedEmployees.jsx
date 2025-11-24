import React from 'react'
import TrainedEmployeesBanner from '../components/TrainedEmployees/TrainedEmployeesBanner'
import LifeShortSection from '../components/WhyHireUs/LifeShortSection'
import AuthorityBrands from '../components/WhyHireUs/AuthorityBrands'
import TrainedEmployeesContent from '../components/TrainedEmployees/TrainedEmployeesContent'

const TrainedEmployees = () => {
  return (
    <div className='w-[100%]'>
        <TrainedEmployeesBanner/>
        <TrainedEmployeesContent/>
        <LifeShortSection/>
        <AuthorityBrands/>

    </div>
  )
}

export default TrainedEmployees