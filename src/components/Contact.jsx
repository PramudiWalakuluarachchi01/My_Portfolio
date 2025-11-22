import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

function Contact() {
  return (
    <section id="portfolio"
      className="py-20 px-6 bg-linear-to-r from-[#011914] to-[#022c2b]"
    >
    <div  className="container mx-auto">
         <h2 className="text-3xl font-bold text-center mb-2 text-outline-white text-gray-400">
          Let's Connect!
        </h2>
       <p className="text-gray-500 text-center text-lg mb-10">
         Reach out anytime, I’m always open to new opportunities
        </p>
        <div className='bg-white/5 backdrop:blur-lg rounded-2xl p-8 md:p-1 grid grid-cols2 gap-12 border-white/20'>
           <div className='mt-8'>
           <h4 className='font-semibold mb-4 text-white'></h4>

           </div>

           </div> 
        </div>
   
    </section>
  )
}

export default Contact