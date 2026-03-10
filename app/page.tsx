import React from 'react'
import HeroSection from '../components/glassmorphism-trust-hero'
import Navbar from '../components/ui/navbar'
import { Features } from '@/components/Features'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features/>
    </div>
  )
}

export default Home