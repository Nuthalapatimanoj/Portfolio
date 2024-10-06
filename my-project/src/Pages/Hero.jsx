import React from 'react'
import PhotoImage from '../assets/PHOTO.jpg'
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-15' id="home">
      <img src={PhotoImage} alt="" className='mx-auto mb-8 w-40 h-50 rounded-full object-cover transform transition-transform duration-300 hover:scale-100'/>
      <h1 className='text-4x1 font-bold'> I'm {" "}
        <span className='text-transparent bg-clip-text bg-blue-500'>N MANOJ </span>
        , FULL-STACK DEVELOPER
      </h1>
      <p>
        I specialize in building modern and responsive web applications.
      </p>
    </div>
  )
}

export default Hero