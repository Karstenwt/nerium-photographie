'use client'

import HeroSection from '@/components/HeroSection'
import { StatsBar, LiveCounter, GalleryStrip, TestimonialsStrip, SplitScreen } from '@/components/AllComponents'
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
