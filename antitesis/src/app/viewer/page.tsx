"use client"

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import ShapeDiverViewer from '@/components/Viewer'
import Footer from '@/components/Footer'
import ParametricIntro from '@/components/ParametricIntro'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <main>
      <Navbar />
      <ParametricIntro open={showIntro} onClose={() => setShowIntro(false)} />
      <ShapeDiverViewer />
      <Footer />
    </main>
  )
}
