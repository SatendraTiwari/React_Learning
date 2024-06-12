import { useState } from 'react'
import AddTodo from './compnents/AddTodo.jsx'
import Todos from './compnents/Todos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>My todo on Reduxe Toolkit </div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
