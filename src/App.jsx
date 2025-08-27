import React from 'react'
import Hero from './Components/Hero'
import './App.css'
import Features from './Components/Features'
import Onboarding from './Components/Onboarding'
import Testimonials from './Components/Testimonials'
import Faq from './Components/Faq'
import PromoBanner from './Components/PromoBanner'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Onboarding/>
      <Testimonials/>
      <Faq/>
      <PromoBanner/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
