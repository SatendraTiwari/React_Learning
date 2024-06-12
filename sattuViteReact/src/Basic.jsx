
// function MyApp(){
//   return (
//     <div>
//       <h1>hell0!!</h1>
//     </div>
//   //   <React.StrictMode>
//   //   MyApp()
//   //   <App />
//   // </React.StrictMode

//   // not allowe
// //   <>
// //   <anotherElement/>
// //   anotherElement
// //   <MyApp />
// //   <App />
// // </>
//   ) 
// }



// const anotherElement = (
//   <a href='https://google.com' terget='_blank'>visit google</a>
// )


// const ReactElement =  React.createElement(
//   'a',
//   {
//     herf:'https://google.com',
//     terget: '_blank'
//   },
//   'Click at me visit on google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    // <ReactElement/>
    // ReactElement
    <>
    <App/>
    <Hooks/>
    </>
    
  
  )
  

  
function App(){

    // let [counter,setCounterss] = useState(15)
    // // let counter = 15;
    // const addValue = () => {
    //   console.log("clicked",counter);
    //   counter = counter + 1;
    //   setCounterss(counter);
  
    // }
  
    // const DecValue = () =>{
    //   console.log("clicked",counter)
    //   counter = counter - 1
    //   setCounterss(counter)
    // }
  
    return (
      <>
      <Hooks />
  
      <Chai />
      </>
    )
  }
  
  
  
  