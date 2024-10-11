
import { useState } from "react";
import './App.css'




function Hooks(){

  let [counter,setCounters] = useState(15)
  // let counter = 15;
  const addValue = () => {
    console.log("clicked",counter);
    // counter = counter + 1;
    setCounterss(counter);

  }

  const DecValue = () =>{
    console.log("clicked",counter)
    counter = counter - 1
    setCounters(counter)
  }

  return (
    <>
    <h1>Hello Hay</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={DecValue}>Remove Value {counter}</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default Hooks