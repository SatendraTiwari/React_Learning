import React, { useContext, useState } from "react";
import { notesContextApi } from "../ContextApi";

function Notes({notes}) {
    const [text,setText] = useState();

    return ( 
        <>
        <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg `}
                value={notes.text}
                
            />
        </>
     );
}

export default Notes;