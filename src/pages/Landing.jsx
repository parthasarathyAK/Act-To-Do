import Header from '../components/Header'
import Card from '../components/Card';
import Todocontainer from '../Todocontainer';
import { useLocation } from "react-router-dom"


function Landing(){
    const data =useLocation()
return(
    <div className="bg-black p-16">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
   <Header name={data.state.user} />
   <div className="flex justify-between my-5 gap-7 flex-wrap">
    <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Chennai"}/>
    <Card bgcolor={"#FD6663"} title={"14 January"} subtitle={"14.02.08"}/>
    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
   </div>
<Todocontainer/>

</div>
</div>)

}
export default Landing