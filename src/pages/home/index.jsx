import React from 'react'
import github_icon from '../../assets/github.png'
import linkedin_icon from '../../assets/linkedin.png'
import profile_pic from '../../assets/pwpp.png'
import pin_emoji from '../../assets/round_pushpin.png'
import wave_emoji from '../../assets/wave.png'
import html5_icon from '../../assets/html-5.png'
import css3_icon from '../../assets/css-3.png'
import js_icon from '../../assets/js.png'
import react_icon from '../../assets/react.png'
import tailwind_icon from '../../assets/tailwindcss.png'
import node_icon from '../../assets/node-js.png'
import postgres_icon from '../../assets/postgre.png'
import sql_icon from '../../assets/sql.png'
import { Element } from 'react-scroll'
import { Typewriter } from '../../components'
import styles from './styles.module.css'

export default function Home() {

  return (
    <Element name='home'>
    <div className='bg-white bg-repeat h-screen' style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23e3e3e3' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}>
      <div id="hero" className='flex flex-row w-fit px-12 justify-center mx-auto my-0 pt-28 border-b border-black animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-300'>
        <div id="inner-hero" className='flex flex-col my-auto pt-10'>
          <h1 className='text-3xl font-normal w-30rem -mb-1'>
            Hi there, I'm
          </h1>
          <div className='flex flex-row gap-2 text-5xl font-bold w-30rem mb-1'>
            <h1>
              Steve Totev
            </h1>
            <h1 className={`animate-wiggle-more animate-infinite animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-both ${styles['custom-transform-origin']}`}>
              <img src={wave_emoji} alt="hand wave" className='w-12 h-12'/>
            </h1>
          </div>
          <div className='flex flex-row text-2xl font-normal w-30rem mb-4 text-gray-700'>
            <p className='pr-1'>A passionate</p><Typewriter />
          </div>
          <div id="hero-links" className='flex flex-row gap-2'>
            <a href="https://github.com/bossSteve03" target="_blank"><img src={github_icon} alt="github link" className='h-10 w-10 rounded-lg'/></a>
            <a href="https://www.linkedin.com/in/stevetotev/" target="_blank"><img src={linkedin_icon} alt="LinkedIn Link" className='h-10 w-10 rounded-lg'/></a>
          </div>
        </div>
        <img src={profile_pic} alt="Steve Totev" className='w-56' />
        {/* <p className='place-self-end h-64 border-r border-black'></p> */}
      </div>
      <div className="flex justify-between flex-row-reverse pt-1 animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-300 w-fit mx-auto my-0 px-12">
        <div className='flex flex-row gap-1'>
          <p className='text-lg font-normal mb-2 text-gray-700 w-56 text-right'>
            Based in London, UK.
          </p>
          <img src={pin_emoji} alt="pin" className='w-6 h-6'/>
        </div>
        <p className='w-30rem'></p>
      </div>
      <div id="tech-stack" className='w-fit flex flex-row mx-auto my-7 gap-7 justify-center animate-fade-up animate-once animate-duration-1000 animate-ease-in-out animate-delay-500'>
        <h4 className='border-r border-black pr-5 place-self-center py-1 text-lg pl-7 mr-5'>Tech stack</h4>
        <img src={html5_icon} title='HTML5' alt="HTML 5" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
        <img src={css3_icon} title='CSS3' alt="CSS 3" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
        <img src={js_icon} title='JavaScript' alt="JavaScript" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
        {/* <img src={sql_icon} title='SQL' alt="SQL" className='w-10 transform hover:scale-125 transition-transform duration-300'/> */}
        <img src={react_icon} title='React' alt="React" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
        {/* <img src={tailwind_icon} title='Tailwindcss' alt="Tailwindcss" className='w-10 h-6 my-auto transform hover:scale-125 transition-transform duration-300'/> */}
        <img src={node_icon} title='Node.js' alt="Node.js" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
        <img src={postgres_icon} title='PostgreSQL' alt="PostgreSQL" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      </div>
    </div>
    </Element>
  )
}
