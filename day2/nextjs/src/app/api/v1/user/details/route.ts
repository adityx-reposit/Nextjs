import { NextRequest, NextResponse } from "next/server";


export function GET(){
    return NextResponse.json({
        user:"aditya",
        email:"Aditryayafav@gmail"
    })
}

export function POST(){
    return NextResponse.json({
        user:"aditya",
        email:"Aditryayafav@gmail"
    })
}
export default function UserHandler(){
    return 
}