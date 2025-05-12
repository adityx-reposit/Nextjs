"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const page = () => {
    const [loading,setloading]=useState(true)
    const [data,setdata]=useState();

        useEffect(()=>{
           axios.get("https://jsonplaceholder.typicode.com/todos/1")
              .then(response=>{
                   setdata(response)
               setloading(false)
              })
        },[])
    

        if(loading){
            return <div>
                loading....
            </div>
        }

    console.log(data.title);
    

  return (
    <div>
     
     
      {data.title}
      
       
    
    </div>
  )
}

export default page
