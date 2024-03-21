
function Todoitem(props){
 const newarr=props.newarr
 const setnewarr=props.setnewarr
 function handledelete(removeid){
 var temparr=newarr.filter(function(item){
    if (item.id === removeid){
        return false
    }
    else {
        return true
    }
 })
 setnewarr(temparr)
 }
    return(
       <div className="flex justify-between">
        
       <p>{props.index+1}.{props.item.activity}</p>
       <button className="text-red-500" onClick={()=>handledelete(props.item.id)}>Delete</button>
       </div>
    )
}
export default Todoitem