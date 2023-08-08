import React, { useRef } from 'react'

export default function Nav() {
  // const homeRef = useRef(null)
  // const aboutRef = useRef(null)
  // const projectsRef = useRef(null)
  // const contactRef = useRef(null)


  // const homeHandle = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollTo({
  //     behaviour: 'smooth',
  //     });
  //   }
  // }
  // const aboutHandle = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollTo({
  //     behaviour: 'smooth',
  //     });
  //   }
  // }
  // const projectsHandle = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollTo({
  //     behaviour: 'smooth',
  //     });
  //   }
  // }
  // const contactHandle = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollTo({
  //     behaviour: 'smooth',
  //     });
  //   }
  // }

  return (
    <>
    <div id="navbar" className='flex flex-row justify-between w-screen p-6'>
      <h1 className='text-2xl font-semibold'>Steve Totev</h1>
      <div id="nav-btns" className='flex flex-row text-lg place-self-center gap-5'>
        <button className='font-semibold'>Home</button>
        <button className='font-semibold'>About</button>
        <button className='font-semibold'>Projects</button>
        <button className='font-semibold'>Contact</button>
      </div>
    </div>
    </>
  )
}
