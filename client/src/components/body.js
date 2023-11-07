import { RestroCards } from "./Restrocards";
import { burgerking } from "./config";
import { useState } from "react";


function filterdata(search,resturentlist){
  const filterdata= resturentlist.filter((resturent)=>
    resturent.info.name.includes(search)

   
  )
  return filterdata ;
}

export const Body = () => {
const [search,setSearch]=useState("")
const[resturentlist,setResturentlist]=useState(burgerking)
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