import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Background from './component/Background'
import Foreground from './component/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text relative  w-full h-screen bg-slate-900' >
        <Background />
        <Foreground /> 
      </div>
    </>
  )
}

export default App
