import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Booking from './Booking'
import Footer from './Footer'

const FullPage = () => {
  return (
    <div className='h-full w-screen bg-[#16130F] overflow-hidden'>
        <NavBar />
        <Hero />
        <About />
        <Portfolio />
        <Booking />
        <Footer />
    </div>
  )
}

export default FullPage