import React from 'react'
import HeroSection from '../components/glassmorphism-trust-hero'
import Navbar from '../components/ui/navbar'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Stats } from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'
import { CTABanner } from '@/components/CTABanner'
import { Footer } from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default Home