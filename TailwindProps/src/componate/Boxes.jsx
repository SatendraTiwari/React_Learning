function Boxes({num}) {
    let count = (e) => {
        console.log(e)
        console.log(`${num}`)
    }
    return ( 
        <div className="flex flex-col ">
        <span className=" border bg-black text-white justify-center text-center mt-24 h-10 w-10 ml-28  }"
        value={num}
        onClick={(e) => count(e)}
        >{num}</span>
        </div>
        );
 
}

export default Boxes;