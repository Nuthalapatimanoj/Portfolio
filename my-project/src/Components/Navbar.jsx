import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-2 md:px-8 lg:px-24'>
        <div className='container py-5 flex justify-center md:justify-between items-center'>
            <div className='text-3x1 font-bold hidden md:inline'>MANOJ</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-red-400'>Home</a>
                <a href="#about" className='hover:text-red-400'>About me</a>
                <a href="#projects" className='hover:text-red-400'>Projects</a>
                <a href="#resume" className='hover:text-red-400'>Resume</a>
                <a href="#contact" className='hover:text-red-400'>Contact</a>
            </div>
            <div className='bg-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><a href='#contact'>Connect</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar