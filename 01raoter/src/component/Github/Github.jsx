import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setData(data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    return (

        <div className="  text-center m-4 bg-orange-700 text-white p-4 text-3xl">
            <p className=" text-center">GITHUB FOLLOWERS :{data.followers}</p>
            <div className=" flex flex-col justify-items-center text-center">
            <h1 className="m-10">{data.name}</h1>  
            <img className="h-52 w-52 align-middle" src={data.avatar_url} alt="" />
            <br />
            <p className=" text-lg m-10  text-center">{data.bio}</p>  
            </div>
        </div>
    )
}

export default Github;