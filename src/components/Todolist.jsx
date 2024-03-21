
import Todoitem from "./Todoitem"
function Todolist(props) {
 const newarr=props.newarr
  const setnewarr=props.setnewarr  
    return (
        <>
            <div className="bg-[#BDB4EA] p-2 flex-grow  border rounded-md">
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                {newarr.length === 0 ?<p>You haven't added anything yet</p>:""}

                {
            newarr.map(function(item,index){
                return <Todoitem item={item} index={index} newarr={newarr} setnewarr={setnewarr}></Todoitem>
            })
          }
            </div>
         


        </>
    )
}
export default Todolist