"use client"

import axios from "axios"
import { useState } from "react"

export default function Signin(){
    
   const [username,setUsername]=useState("");
   const [password , setPassword]=useState("");
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2 ">
             <input onChange={e=>{
                setUsername(e.target.value)
             }} type="text" placeholder="Username" />
             <input onChange={e=>{
               setPassword(e.target.value)
             }} type="password" placeholder="Password" />
             <button onClick={()=>{
                   axios.post("/api/v1/user/details",{
                    username,
                    password
                   })
             }}>Sign up</button>
       
        </div>
    </div>
}