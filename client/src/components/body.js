import { RestroCards } from "./Restrocards";
import { burgerking } from "./config";
import { useState,useEffect } from "react";


function filterdata(search,resturentlist){
  const filterdata= resturentlist.filter((resturent)=>
    resturent.info.name.includes(search)

   
  )
  return filterdata ;
}

export const Body = () => {
const [search,setSearch]=useState("")
const[resturentlist,setResturentlist]=useState(burgerking)

useEffect(()=>{
getRestuents()
},[])


async function getRestuents(){
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.944005&lng=76.32809&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json= await data.json()
  // console.log(json);
  
  setResturentlist(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
    return (
<>
      <div className="search-container" >
        <input type="text" className="search-input" placeholder="search"
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        />
     

     <button className="search-btn" 
     onClick={()=>{
      const data=filterdata(search,resturentlist)
     
      setResturentlist(data)
     }}>
  search
     </button>
     
      </div>
      <div className="resturent-list">
  
        {resturentlist.map((resturent)=>{
          return <RestroCards {...resturent.info} key={resturent.info.id}/>
        })}
       
       
   
    
      </div>
      </>
    );
  };