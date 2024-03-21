import React from 'react'
import techItems from './techItems'

export default function Technologies() {
  return (
    <>
    <div id="tech-list" className='flex flex-col justify-center mx-12 my-7 text-center'>
      <h2 className="text-xl font-semibold mb-4">Technologies</h2>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 px-12'>
        {techItems.map((item, index) => (
          <div key={index} className="flex flex-col p-3 text-center border border-transparent hover:bg-gray-100 rounded-md transform hover:scale-105 transition-transform duration-300">
            <div className="h-full mb-3 mt-4 flex items-center">
              <img src={item.icon} alt={item.name} className='w-12 h-min my-0 mx-auto'/>
            </div>
            <p className="text-center w-full text-xs">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
