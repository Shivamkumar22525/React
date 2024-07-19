import React from "react";
import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState([])
    
    // useEffect(()=>{        
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="bg-gray-600 text-white m-4 p-4">Github Followers: {data.followers}
            <img className="flex text-center px-10" src={data.avatar_url}  alt="" height= '300px' width= '300px' />
        </div>
    )
}
export default Github

export const useLoaderInfo = async()=>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}