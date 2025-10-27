import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PopularProperties from './components/PopularProperties'
import Services from './components/Services'
import About from './components/About'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Cta from './components/Cta'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PopularProperties />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App