'use client'

import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import LiveCounter from '@/components/LiveCounter'
import GalleryStrip from '@/components/GalleryStrip'
import TestimonialsStrip from '@/components/TestimonialsStrip'
import SplitScreen from '@/components/SplitScreen'
import MapMariages from '@/components/MapMariages'

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <SplitScreen />
      <GalleryStrip />
      <TestimonialsStrip />
      <LiveCounter />
      <MapMariages />
    </>
  )
}
