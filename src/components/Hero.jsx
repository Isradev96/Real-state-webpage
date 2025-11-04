import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='py-10 bg-[url("/images/hero-banner.png")] bg-cover bg-center min-h-screen lg:min-h-[860px] bg-no-repeat flex items-center' id='home'>
        <div className="container text-gray-50">
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[64px]'>
                Find the <br /> Property That <br /> Feels Like Home.
            </h1>
            <p className='text-gray-200 max-w-[440px] pt-4 pb-8'>
                From cozy apartments to spacious family homes, we’ll help you find the one that fits your lifestyle.
            </p>

            <Button label={'Search property'} className="primary-btn" />
        </div>
    </section>
  )
}

export default Hero