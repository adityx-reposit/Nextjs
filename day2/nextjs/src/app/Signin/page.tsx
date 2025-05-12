"use client"

import axios from "axios"

export default function Signin(){
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2 ">
             <input type="text" placeholder="Username" />
             <input type="password" placeholder="Password" />
             <button onClick={()=>{
                axios.post("/api/v1/user/details")
             }}>Sign in</button>
       
        </div>
    </div>
}