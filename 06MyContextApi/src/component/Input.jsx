import React, { useState } from "react";
import { useNotesApi } from "../ContextApi";

function Input() {
    const [text,setText] =  useState('')
    const {addNotes} = useNotesApi()
    
    const add = (e) => {
        e.preventDefault()
        if(!text) return 
        addNotes({text})
        setText("")
    }
    return ( 
        <>
       <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Notes..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
        </>
     );
}

export default Input;