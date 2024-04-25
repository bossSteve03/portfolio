import React from 'react'
import { Element } from 'react-scroll'
import CodeCircle from '../../assets/code-circle-icon.png'
import ZenPic1 from '../../assets/IMG_8306.jpeg'

export default function About() {
  return (
    <Element name='about'>
    <div id='section' className='flex flex-col justify-between h-screen p-20 bg-sky-300'>
      <h1 className='text-3xl m-6 p-4 border-b-2 border-black'>About Me</h1>
      <div id="hero" className='flex flex-row px-10 items-center gap-20 self-center'>
        <div id="images" className=''>
          <div className='h-80 w-64 bg-no-repeat bg-center bg- bg-cover relative rounded-md' style={{ backgroundImage: `url(${ZenPic1})` }}>
          <img src={CodeCircle} className='animate-spin animate-infinite animate-duration-[4000ms] h-20 absolute -bottom-8 -right-8' alt="A circle spinning with the words 'Hire Me'" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
        <p className='w-30rem font-light'>
        Welcome to my portfolio! I'm a passionate Software Apprentice who thrives when facing complex challenges and overcoming them to produce elegant solutions in code.
        </p>
        <p className='w-30rem font-light'>With a love for working together, I feel comfortable at my current company working majority of the time in a small team but also regularly collaborating with teams across the wider organisation in different countries.
        </p>
        <p className='w-30rem font-light'>Beyond coding, I'm an avid sports enthusiast (swimming, basketball, bouldering), traveller, and photographer. I also pride myself in my commitment to continuous learning. As such, I'm currently learning my 3rd language, ¡Español!
        </p>
        </div>
      </div>
      <p></p>
    </div>
    </Element>
  )
}
