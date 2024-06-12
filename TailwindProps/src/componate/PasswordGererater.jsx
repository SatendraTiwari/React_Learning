import React, { useEffect, useRef } from "react";
import { useState, useCallback } from "react";
function Password() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password1, setPassword] = useState("")

    const passwordRef = useRef(null)
    const PasswordGererater = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*_+?~"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass =pass + str.charAt(char)
            
        }

        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword])
    
    useEffect(() => {PasswordGererater()},[length,charAllowed,numberAllowed,PasswordGererater])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password1)
    },[password1])

    
    return (
        <>
            <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600  text-center">
                <h1 className=" justify-center text-center text-orange-600 my-3">Password Gererater</h1>
                <div className=" flex shadow rounded-lg overflow-hidden mb-4 ">

                    <input type="text" value={password1} className=" outline-none w-full py-3 px-3" placeholder="Password" readOnly 
                    ref={passwordRef}/>

                    <button onClick={copyPasswordToClipboard} className=" bg-blue-700 text-white px-3 shadow-0">Copy</button>
                </div>
                <div className="flex text-sm gap-x-2 ">
                    <div className="flex items-center gap-x-1">
                        <input type="range"
                            min={6} max={100}
                            value={length}
                            className=" cursor-pointer"
                            onChange={(e) => { setLength(e.target.value) }} />
                        <label>length : {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }} />
                        <label htmlFor="numberInput">Number</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox"
                            id="charInput"
                            defaultChecked={charAllowed}
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }} />
                        <label htmlFor="charInput">Charecter</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Password