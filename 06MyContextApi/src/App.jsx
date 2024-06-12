import { useState, useEffect} from 'react'
import Navber from './component/Navber'
import './App.css'
import Notes from './component/Notes';

function App() {

  const [notes, setNotes] = useState([]);
  const addNotes = (notes) => {
    setText((prev) => [{notes }, ...prev])
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"))
    if (notes && notes.length) {
      setTodos(notes)
    }
   },[])


   useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
   },[notes])

  return (
    <notesProvider value={{notes, addNotes }} >
      <Navber />
      <div className="flex flex-wrap gap-y-3">
          <div className='w-full'>
            <Notes notes={notes}/>
          </div>
     </div>
    </notesProvider>
  )
}

export default App
