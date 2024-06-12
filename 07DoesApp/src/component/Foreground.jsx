import { useRef } from "react";
import Card from "./Card";
function Foreground() {

    const ref = useRef(null)
    const data = [
        {
            desc: "Hello hay i am satendra shrama",
            fileSize: "4MB",
            close: true,
            teg:{ isOpen:true, tegTitle:"Download Now",tegColor: "green"}
        },
        {
            desc: "Hello hay i am satendra shrama",
            fileSize: "4MB",
            close: false,
            teg:{ isOpen:true, tegTitle:"Download Now",tegColor: "blue"}
        }
    ]
    return ( 
        <>
        <div ref={ref} className=' fixed top-0 left-0  w-full h-full bg-transparent m-3 flex  gap-7 flex-wrap'>
            {data.map((item,index) => (
                <Card data={item} referense={ref} />
            ))}
        </div>
        </>
     );
}

export default Foreground;