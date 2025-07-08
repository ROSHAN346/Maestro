import { industries } from '@/data/industries'
import React from 'react'
import OnboardingForm from './_components/onboarding-form'

const OnBoarding = () => {

  // check if user is already onboarded  
  return (
    <main>
      <OnboardingForm industries = {industries}/>
    </main>
  )
}

export default OnBoarding
