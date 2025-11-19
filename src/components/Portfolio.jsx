import React from 'react'
import { experiences } from '../data/data'



function Portfolio() {
  return (
    <section id="portfolio"
      className="py-20 px-6 bg-linear-to-r from-[#011914] to-[#022c2b]">
        <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-outline-white text-gray-400">
          {" "}
          Portfolio
        </h2>
        <p className="text-gray-500 text-center text-l mb-15 ">
          Explore some of my featured projects below.
        </p>
        <div className='relative w-full max-w-5xl mx-auto px-4 py-12'>
            <div className='absolute left-1/2 top-0 bottom-0 w-1 md:flex hidden bg-teal-800 transform -translate-1/2'>
            <div className='space-y-16'>
                {
                    experiences.map((experience, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div className={`relative flex items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                                <div className="absolute left-1/2 md:flex hidden transform -translate-1/2  z-10">
                                <div className='h-10 w-10 rounded-full shadow-lg flex justify-center items-center bg-teal-600'></div>
                                    <span className="text-2xl font-semibold text-teal-100">{experience.logo}</span>
                                </div>
                                <div className={`w-full md:w-[45%] p-6 rounded-xl shadow-lg border border-teal-900 bg-teal-950/50 hover:scale-105 transition-transform duration-300 ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}></div>
                            </div>
                            
                           
                        )
                    })
                }
            </div>
            </div>
        </div>
        </div>
      </section>
  )
}

export default Portfolio