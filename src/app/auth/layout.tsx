import Navbar from "../components/navbar";

//@ts-ignore
export default function Authlayout({children}){
    return <div>
        <Navbar/>
       {children}
    </div>
    

}