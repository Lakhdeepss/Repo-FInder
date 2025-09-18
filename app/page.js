
import React from 'react'
import Header from './components/Header'
import LandingPage_view from './components/LandingPage_view'

const page = () => {
  return (
    <div className='bg-gradient-to-b from-[hsla(240,67%,10%,1)] via-[rgba(3,3,198,0.5)] to-black text-white h-screen overflow-x-hidden'>
      <LandingPage_view />

    </div>
  )
}

export default page
