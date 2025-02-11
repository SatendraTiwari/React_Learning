// import React from 'react';
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        {/* First button */}
        <button onClick={() => setColor("red")}
        className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg'
         style={{backgroundColor: 'red'}}>Red</button>

         {/* Second Button */}
        <button onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg'
         style={{backgroundColor: 'green'}}>green</button>

         {/* third button */}
         <button onClick={() => setColor("orange")}
           className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg'
         style={{backgroundColor: 'orange'}}>orange</button>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
