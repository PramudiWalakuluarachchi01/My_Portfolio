import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { GrGithub } from 'react-icons/gr'
import { IoLocationSharp } from 'react-icons/io5'
import { LuLinkedin } from 'react-icons/lu'

function Contact() {
  return (
    <section id="contact"
      className="py-20 px-6 bg-linear-to-r from-[#011914] to-[#022c2b]"
    >
    <div  className="container mx-auto">
         <h2 className="text-3xl font-bold text-center mb-2 text-outline-white text-gray-400">
          Let's Connect!
        </h2>
       <p className="text-gray-500 text-center text-lg mb-10">
         Reach out anytime, I’m always open to new opportunities
        </p>
        <div >
           <div className='mt-8'>
                <div className='flex gap-4 justify-center '>
                    <div className='p-5 bg-white/40 backdrop:blur-2xl rounded-full hover:bg-teal-600 border-white/20 '>
                        <LuLinkedin/>
                    </div>
                     <div className='p-5 bg-white/40 backdrop:blur-2xl rounded-full hover:bg-teal-600 border-white/20 '>
                        <BsGithub/>
                    </div>
                    <div className='p-5 bg-white/40 backdrop:blur-2xl rounded-full hover:bg-teal-600 border-white/20 '>
                        <GoMail/>
                    </div>
                </div>
           </div>

           </div> 
        </div>
   
    </section>
  )
}

export default Contact