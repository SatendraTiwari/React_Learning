import { MdEditDocument } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data, referense}) {
    return (
        
            <motion.div drag 
            dragConstraints={referense} 
            whileDrag={{scale:1.2}} 
            dragElastic={0.1}  
            dragTransition={{bounceDamping:20,bounceStiffness:600}} 
            className=" relative flex-shrink-0 w-60 h-72  rounded-[20px] bg-zinc-300 text-black overflow-hidden ">
                <MdEditDocument className=" absolute size-6  m-3 " />
                <p className=" absolute top-1/4 text-md font-bold ml-2 leading-tight">{data.desc}</p>
                <div className="footer absolute bottom-0 w-full left-0 ">
                    <div className=" flex items-center justify-between mb-5">
                        <h5 className="w-10 ">{data.fileSize}</h5>

                        <span className="w-7 h-7 border-y-sky-200 rounded-full flex item-center justify-center right-0 ">
                            {data.close ? <IoMdCloseCircle size="1.5rem" />
                            :<FaArrowAltCircleDown size="1.4rem" />}
                        </span>
                    </div>
                    {data.teg.isOpen ? (<div className={`teg w-full py-4 ${data.teg.tegColor  === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
                        <h3 className=" font-bold text-md">{data.teg.tegTitle}</h3>
                    </div>) :null}
                    
                </div>
            </motion.div>
    );
}

export default Card;