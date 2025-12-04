import React from 'react'

function Footer() {
  return (
    <footer className='py-4 px-6 border-t bg-linear-to-r from-[#011914] to-[#022c2b]'>
        <div className='container mx-auto text-center'>
            <p className='text-gray-500 text-sm'>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer