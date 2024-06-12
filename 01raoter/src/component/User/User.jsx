import React from "react";
import { useParams } from "react-router-dom";

function User()
{
    const {userId} = useParams();
    return(
        <div className=" text-center text-white p-14 bg-orange-700">USER : {userId.toUpperCase()}</div>
    )
}

export default User