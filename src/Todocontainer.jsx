import Todoadd from "./components/Todoadd"
import Todolist from "./components/Todolist"
import { useState } from "react"
function Todocontainer(){
    const [newarr,setnewarr]=useState([
        { id:1,
            activity:"Go for a walk " },
        {id:2,
            activity:"Have a Breakfast"},
        {id:3,
            activity:"Take a Shower"},
            
])
          
return(
    <div>
<div className="flex gap-10 flex-wrap">

<Todoadd newarr={newarr} setnewarr={setnewarr}></Todoadd>

<Todolist newarr={newarr} setnewarr={setnewarr}></Todolist>




</div>
</div>
)

}


export default Todocontainer