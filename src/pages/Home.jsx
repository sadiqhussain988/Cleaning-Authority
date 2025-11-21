import React from 'react'
import HeroSection from '../components/home/HeroSection'
import RoomCleaningSection from '../components/home/RoomCleaningSection'
import CleaningInfoSection from '../components/home/CleaningInfoSection'
import ServicesWeOffer from '../components/home/ServicesWeOffer'
import CommunitySection from '../components/home/CommunitySection'
import ContactExperienceSection from '../components/home/ContactExperienceSection'
import FamilySection from '../components/home/FamilySection'


function Home() {
  return (
    <div>
<HeroSection/>
<RoomCleaningSection/>
<CleaningInfoSection/>
<ServicesWeOffer/>
<CommunitySection/>
<ContactExperienceSection/>
<FamilySection/>

    </div>
  )
}

export default Home