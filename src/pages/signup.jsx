import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props){
    const Navigate=useNavigate()
    const users=props.users
    const setusers=props.setusers

    const [eusername,seteusername]=useState()
const [epassword,setepassword]=useState()

function handleusername(event){
    seteusername(event.target.value)
}

function handlepassword(event){
    setepassword(event.target.value)}
function adduser(){
    setusers([...users,{username:eusername,
    password:epassword}])
    Navigate("/")
}

    return(
        <div className="bg-black p-10"> 
        <div className="bg-[#EFEFEF] p-10">
            <h1 className="font-medium text-3xl">Hey Hi</h1>
            <p>You can signup here :)</p>
            <div className="flex flex-col gap-2 my-2">
                <input onChange={handleusername} type="text" className=" w-52 border-black border rounded-md p-1 bg-transparent" placeholder="Username"></input>
                <input onChange={handlepassword} type="text" className="w-52 border-black border rounded-md p-1 bg-transparent" placeholder="password"></input>
                <input type="text" className="w-52 border-black border rounded-md p-1 bg-transparent" placeholder="confirm password"></input>
                <button onClick={adduser} className="w-24 p-1 bg-[#FCA201] border rounded-md" >Sign Up</button>
                <p>Don't have an account?<Link to={"/"} className="underline">Login</Link></p>
            </div>

        </div>
    </div>
    )
}
export default Signup