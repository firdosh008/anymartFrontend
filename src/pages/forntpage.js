import Carosule from "../containers/carosule"
import Latest_drop from "../containers/latest_dropa"
import Top_Categories from "../containers/top_Categories"
import Trending from "../containers/trending"
import NewArivals from "../containers/newArivals"
import Top_anime from "../containers/top_anime"
import {getproducts} from "../components/redux/action/action"
import {useDispatch,useSelector} from "react-redux"
import {useEffect} from "react"


export default function Front(){
    
  const {products}=useSelector(state=>state.getProductsdata)
   //console.log(products)
   const dispatch=useDispatch()
   
   useEffect(()=>{
       dispatch(getproducts())
   },[dispatch])


    return (
    <div> 
        <Carosule />
        <Latest_drop ld={products}/>
        <Top_Categories />
        <Trending t={products}/>
        <NewArivals na={products}/>
        <Top_anime />       
    </div>
    )
    
    
}