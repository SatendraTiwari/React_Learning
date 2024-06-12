import { useState } from 'react'
import './App.css'
import Card from './componate/Card'
import Password from './componate/PasswordGererater'
import Boxes from './componate/Boxes'

function App() {
  const [count, setCount] = useState(0)

  const num = [
    1,2,3,4,5,6,7,9,0
  ]

  return (
    <>
      {/* <Password /> */}
       <Card ProducName ={'sattu'} childran={num.map((n) => <Boxes num={n}/>)}>  
      </Card>

    </>
  )
}

export default App


