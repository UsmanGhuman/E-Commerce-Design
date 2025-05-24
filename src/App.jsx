import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Picture from './components/Picture'
import Rounded from './components/Rounded'
import Daily from './components/Daily'
import Mobile from './components/Mobile'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Picture/>
      <Rounded/>
      <Mobile/>
      <Daily/>
      <Footer/>
    </div>
    
  )
}
