import React from 'react'
import TCABanner from '../components/TcaApp/TCABanner'
import AuthorityBrands from '../components/WhyHireUs/AuthorityBrands'
import MyAppContent from '../components/TcaApp/MyAppContent'

const TcaApp = () => {
  return (
    <div className='w-[100%]'>
        <TCABanner/>
        <MyAppContent/>
        <AuthorityBrands/>

    </div>
  )
}

export default TcaApp