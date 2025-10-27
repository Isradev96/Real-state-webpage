import React from 'react'
import { ServicesCardItem } from '../constant/data'

const Services = () => {
  return (
    <section className='py-[90px] bg-gray-200/30 md:py-[150px]'>
        <div className='container'>
            <p className="subtitle">Services</p>
            <h2>Services we offer</h2>

            {/* list */}
            <ul className='grid gap-6 mt-10 md:mt-16 sm:grid-cols-2 lg:grid-cols-4'>
                {ServicesCardItem.map(item => (
                    // card
                    <div className='border border-gray-300 p-[36px] rounded-lg bg-white hover:border-sky-400 transition' key={item.id}>
                        <div className='bg-sky-200/30 max-w-max p-5 rounded-full'>
                            <img src={item.icon} alt={item.title} width={70} height={70} />
                        </div>

                        <h4 className='text-[22px] font-bold my-3'>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Services