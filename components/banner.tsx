import React from 'react'

function Banner() {
  return (
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
    <div className='px-10 space-y-5 p-1'>
            <h1 className="text-6xl max-w-xl font-serif">
                <span className='underline decoration-black decoration-slice decoration-4 '>Medium
                    </span> {""} is a place to write, read and Connect</h1>
            <h2 className="banner">It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
        </div>
        
        <div className=''
        >
            <img className='hidden md:inline-flex h-32 lg:h-full' 
            src='https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png'
            alt='Medium logo' />
        </div>
    </div>
  )
}

export default Banner