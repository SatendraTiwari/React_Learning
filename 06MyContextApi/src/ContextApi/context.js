import { createContext, useContext } from "react";

export const notesContextApi = createContext({
    notes:[
        {text : "hello"}
    ],
    addNotes: () => {},
    upData: () => {},
});

export const useNotesApi = () => {
    return useContext(notesContextApi)
}

export const notesProvider = notesContextApi.Provider