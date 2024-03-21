import { useState } from "react"


function Todoadd(props) {

    const newarr=props.newarr
    const setnewarr=props.setnewarr
    const [valuearr,setvaluearr]=useState("")
function handlechange(event){
    setvaluearr(event.target.value)
}
function addactivity(){
    setnewarr([...newarr,{id:newarr.length +1,activity:valuearr}])
    setvaluearr("")
}

    return (
        <>
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div className="flex flex-row justify-around">
                    <input type="text" value={valuearr} onChange={handlechange} className="p-1  bg-transparent border border-black " placeholder="Next Activity?"></input>
                    <button onClick={addactivity} className="p-1 bg-black text-white border border-black mr-1  ">Add</button>
                </div>
            </div>
        </>
    )
}
export default Todoadd