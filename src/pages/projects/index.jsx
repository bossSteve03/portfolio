import React from 'react'
import { Element } from 'react-scroll'

export default function Projects() {
  return (
    <Element name='projects'>
    <div id="section" className='flex flex-col justify-between min-h-screen p-20'>
      <h1 className='text-3xl p-10'>Projects</h1>
      <div id="project" className='flex flex-row px-10 gap-20'>
        <p className='bg-slate-400 h-40 w-80'></p>
        <div className='flex flex-col'>
          <p className="">Project soon coming!</p>
          <p className="w-80">This project isnt available to showcase yet but will be our soon! Just kidding. there is no project. this is purely for display and will not persist through to the final deployment of the portfolio :)</p>
        </div>
      </div>
      <p></p>
    </div>
    </Element>
  )
}
