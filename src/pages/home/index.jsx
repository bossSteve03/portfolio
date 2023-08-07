import React from 'react'
import github_icon from '../../assets/github.png'
import linkedin_icon from '../../assets/linkedin.png'
import profile_pic from '../../assets/pwpp.png'

export default function Home() {
  return (
    <>
    <div id="hero" className='flex flex-row w-48rem justify-center mx-auto my-0'>
      <div id="inner-hero" className='flex flex-col my-auto'>
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
    </>
  )
}
