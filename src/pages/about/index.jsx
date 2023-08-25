import React from 'react'
import { Element } from 'react-scroll'
import HireMeCircle from '../../assets/HireMeCircle.png'
import LaptopDesk from '../../assets/LaptopDesk.jpeg'

export default function About() {
  return (
    <Element name='about'>
    <div id='section' className='flex flex-col justify-between h-screen p-20 bg-sky-300'>
      <h1 className='text-3xl m-6 p-4 border-b-2 border-black'>About Me</h1>
      <div id="hero" className='flex flex-row px-10 items-center gap-20 self-center'>
        <div id="images" className=''>
          <div className='h-80 w-64 bg-no-repeat bg-center bg- bg-cover relative rounded-md' style={{ backgroundImage: `url(${LaptopDesk})` }}>
          <img src={HireMeCircle} className='animate-spin animate-infinite animate-duration-[4000ms] h-20 absolute -bottom-8 -right-8' alt="A circle spinning with the words 'Hire Me'" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
        <p className='w-30rem font-light'>
        Welcome to my portfolio! I'm a passionate Full Stack Web Developer who thrives on turning complex challenges into elegant solutions through code.</p>
        <p className='w-30rem font-light'>With a love for collaborative work, I feel comfortable working in teams both small and large. I enjoy being part of teams that share my dedication to excellence, I also highly value strong work cultures/ethics.</p>
        <p className='w-30rem font-light'>Beyond coding, I'm an avid sports enthusiast, and I'm committed to continuous learning and embracing new opportunities for growth. Let's push boundaries and innovate together!
        </p>
        </div>
      </div>
      <p></p>
    </div>
    </Element>
  )
}
