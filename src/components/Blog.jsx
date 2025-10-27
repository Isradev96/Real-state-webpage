import React from 'react'
import { blogSectionCard } from '../constant/data'

const Blog = () => {
  return (
    <section className='section'>
        <div className="container">
            <p className='subtitle sm:text-center'>Real State Insights</p>
            <h2 className='sm:text-center max-w-[450px] sm:mx-auto mt-1'>Tips, trends, and market news</h2>

            {/* card wrapper */}
            <div className='mt-8 md:mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
                {blogSectionCard.map(item => (
                    // card
                    <div className='border border-gray-200' key={item.id}>
                        {/* card image */}
                        <div>
                            <img src={item.imgUrl} alt={item.title} className='w-full h-full object-cover'/>
                        </div>

                        {/* card content */}
                        <div className="p-5">
                            <a href="#" className='text-[22px] md:text-2xl font-semibold leading-tight hover:text-sky-600 transition-colors'>{item.title}</a>
                            <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iure enim perferendis nobis dicta cumque.</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog