import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    const users=props.users
    const Navigate=useNavigate()
   
const [eusername,seteusername]=useState()
const [epassword,setepassword]=useState()
const [ruser,setruser]=useState(true)

function handleusername(event){
    seteusername(event.target.value)
}
function handleuserpassword(event){
    setepassword(event.target.value)
}
function checkuser(){

    var userfound=false
    users.forEach(function (item) {
if(item.username === eusername && item.password === epassword){
     console.log("login successfull")
     Navigate("./landing",{state:{user:eusername}})

    
     userfound=true}

    if(userfound === false){
        
        console.log("login failed")
        setruser(false)

    }


        
    });
}
    return(
        <div className="bg-black p-10"> 
            <div className="bg-[#EFEFEF] p-10">
                <h1 className="font-medium text-3xl">Hey Hi</h1>
               {ruser? <p>I help you manage your actvities after you login :)</p>:<p className="text-red-500">please signup before you Login</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input onChange={handleusername} type="text" className=" w-52 border-black border rounded-md p-1 bg-transparent" placeholder="Username"></input>
                    <input onChange={handleuserpassword} type="text" className="w-52 border-black border rounded-md p-1 bg-transparent" placeholder="password"></input>
                    <button onClick={checkuser} className="w-24 p-1 bg-[#8272DA] border rounded-md">Login</button>
                    <p>Don't have an account?<Link to={"/signup"} className="underline">Signup</Link></p>
                </div>

            </div>
        </div>
    )
}
export default Login