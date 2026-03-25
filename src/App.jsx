import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Ceremony from './components/Ceremony'
import Dresscode from './components/Dresscode'
import Gallery from './components/Gallery'
import Rsvp from './components/Rsvp'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Parking from './components/Parking'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && <Intro onCheckIn={() => setShowIntro(false)} />}

      {!showIntro && (
        <div className="main-content fade-in">
          <Navbar />
          <Hero />
          <Story />
          <Ceremony />
          <Dresscode />
          <Gallery />
          <Rsvp />
          <Parking />
          <Footer />
          <MusicPlayer />
        </div>
      )}
    </>
  )
}

export default App
