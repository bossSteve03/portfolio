import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export default function Nav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 610) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      };
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);
  
  const isActive = true;

  return (
    <>
    <nav className={`flex flex-row justify-between w-screen py-4 px-6 z-50 bg-white border-b border-gray-200 ${isSticky ? 'fixed top-0 animate-fade-down animate-duration-800 animate-ease-out animate-once bg-opacity-90' : 'absolute'}`}>
      <h1 className='text-2xl font-semibold'>Steve Totev</h1>
      <div id="nav-btns" className='flex flex-row text-lg place-self-center gap-5 text-gray-400'>
        {/* Use the Link component for navigation */}
        <Link
          className='font-semibold cursor-pointer'
          activeClass="text-black" // CSS class applied to the Link when it's active
          to="home" // Target section to scroll to
          spy={true} // Enable spy functionality to update the active state
          smooth={true} // Enable smooth scrolling animation
          offset={0} // Offset from the top when scrolling to the target
          duration={1000} // Duration of the scrolling animation
        >
        Home
        </Link>
        <Link
          className='font-semibold cursor-pointer'
          activeClass="text-black"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          About
        </Link>
        <Link
          className='font-semibold cursor-pointer'
          activeClass="text-black"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Projects
        </Link>
        <Link
          className='font-semibold cursor-pointer'
          activeClass="text-black"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Contact
        </Link>
      </div>
    </nav>
    </>
  )
}
