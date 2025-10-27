import React from 'react'
import { teams } from '../constant/data'
import Button from './Button'

const Team = () => {
  return (
    <section className='py-[90px] md:py-[150px]'>
        <div className="container">
            <p className="subtitle">Our Team</p>
            <h2>Meet our Team</h2>

            <div className='grid gap-16 mt-10 sm:grid-cols-2 lg:grid-cols-4'>
                {teams.map(member => (
                    <div className='relative' key={member.id}>
                        {/* image */}
                        <div>
                            <img src={member.img} alt={member.name} className='w-full h-full object-cover'/>
                        </div>

                        <div className='absolute -bottom-10 border bg-white border-gray-300 p-4 rounded-lg left-1/2 -translate-x-1/2 w-[80%] text-center'>
                            <h4 className='text-lg text-sky-700'>{member.name}</h4>
                            <p>{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Button label='View More' className='secondary-btn ml-auto block mt-20 rounded-md'/>
        </div>
    </section>
  )
}

export default Team