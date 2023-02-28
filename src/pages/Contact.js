import React from 'react'
import HeroSection from '../components/HeroSection'

const Contact = () => {
  const contactTitle = "Contact Us"
  return (
    <div className='container pt-4'>
      <HeroSection title={contactTitle}></HeroSection>
    </div>
  )
}

export default Contact
