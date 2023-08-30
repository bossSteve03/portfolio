import React from 'react'
import html5_icon from '../../assets/html-5.png'
import css3_icon from '../../assets/css-3.png'
import js_icon from '../../assets/js.png'
import react_icon from '../../assets/react.png'
import tailwind_icon from '../../assets/tailwindcss.png'
import node_icon from '../../assets/node-js.png'
import postgres_icon from '../../assets/postgre.png'
import sql_icon from '../../assets/sql.png'
import bootstrap_icon from '../../assets/bootstrap.png'
import figma_icon from '../../assets/figma.png'
import photoshop_icon from '../../assets/photoshop.png'
import vite_icon from '../../assets/vite.svg'

export default function Technologies() {
  return (
    <>
    <div id="tech-stack" className='flex flex-row mx-auto my-7 gap-7 justify-center'>
      {/* <h4 className='border-r border-black pr-5 place-self-center py-1 text-lg pl-7 mr-5'>Tech stack</h4> */}
      <img src={html5_icon} title='HTML5' alt="HTML 5" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={css3_icon} title='CSS3' alt="CSS 3" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={js_icon} title='JavaScript' alt="JavaScript" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={sql_icon} title='SQL' alt="SQL" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={react_icon} title='React' alt="React" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={tailwind_icon} title='Tailwindcss' alt="Tailwindcss" className='w-10 h-6 my-auto transform hover:scale-125 transition-transform duration-300'/>
      <img src={node_icon} title='Node.js' alt="Node.js" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={postgres_icon} title='PostgreSQL' alt="PostgreSQL" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={bootstrap_icon} title='Bootstrap' alt="Bootstrap" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={figma_icon} title='Figma' alt="Figma" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={photoshop_icon} title='Adobe Photoshop' alt="Photoshop" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
      <img src={vite_icon} title='Vite' alt="Vite" className='w-10 transform hover:scale-125 transition-transform duration-300'/>
    </div>
    <div id="tech-list" className='flex flex-row justify-around mx-12 my-7 text-center'>
      <p></p>
      <div className='flex flex-col p-3'>
        <h1 className="font-medium border-b border-black mb-1">Languages</h1>
        <p className="">HTML</p>
        <p className="">CSS</p>
        <p className="">JavaScript</p>
        <p className="">SQL</p>
      </div>
      <div className='flex flex-col p-3'>
        <h1 className="font-medium border-b border-black mb-1">Frontend</h1>
        <p className="">React</p>
        <p className="">Tailwindcss</p>
        <p className="">Bootstrap</p>
        <p className="">Vite</p>
        <p className="">Vitest</p>
        <p className="">Jest</p>
        <p className=""></p>
      </div>
      <div className='flex flex-col p-3'>
        <h1 className="font-medium border-b border-black mb-1">Backend</h1>
        <p className="">Node.js</p>
        <p className="">Express.js</p>
        <p className=""></p>
        <p className="">Nodemailer</p>
        <p className="">Nodemon</p>
      </div>
      <p></p>
    </div>
    </>
  )
}
