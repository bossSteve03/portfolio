import React from 'react'
import github_icon from '../../assets/github.png'
import linkedin_icon from '../../assets/linkedin.png'
import profile_pic from '../../assets/pwpp.png'
import html5_icon from '../../assets/html-5.png'
import css3_icon from '../../assets/css-3.png'
import js_icon from '../../assets/js.png'
import react_icon from '../../assets/react.png'
import tailwind_icon from '../../assets/tailwindcss.png'

export default function Home() {
  return (
    <>
    <div id="hero" className='flex flex-row w-48rem justify-center mx-auto my-0 border-b border-black mt-20'>
      <div id="inner-hero" className='flex flex-col my-auto pt-10'>
        <h1 className='text-4xl font-bold w-30rem mb-1'>
          Front-End Developer 👋
        </h1>
        <p className='text-2xl font-normal w-30rem mb-4 text-gray-700'>
          Hi, I'm Steve Totev. A passionate Front-End Developer based in London, UK. 📍
        </p>
        <div id="hero-links" className='flex flex-row gap-2'>
          <a href="https://github.com/bossSteve03" target="_blank"><img src={github_icon} alt="github link" className='h-10 w-10 rounded-lg'/></a>
          <a href="https://www.linkedin.com/in/stevetotev/" target="_blank"><img src={linkedin_icon} alt="LinkedIn Link" className='h-10 w-10 rounded-lg'/></a>
        </div>
      </div>
      <img src={profile_pic} alt="Steve Totev" className='h-80' />
    </div>
    <div id="tech-stack" className='flex flex-row mx-auto my-7 gap-7 w-48rem'>
      <h4 className='border-r border-black pr-5 place-self-center py-1 text-lg pl-7 mr-5'>Tech stack</h4>
      <img src={html5_icon} alt="HTML 5" className='w-10'/>
      <img src={css3_icon} alt="CSS 3" className='w-10'/>
      <img src={js_icon} alt="JavaScript" className='w-10'/>
      <img src={react_icon} alt="React" className='w-10'/>
      <img src={tailwind_icon} alt="Tailwindcss" className='w-10 h-6 my-auto'/>
    </div>
    </>
  )
}
