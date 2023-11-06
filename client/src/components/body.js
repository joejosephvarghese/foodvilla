import { RestroCards } from "./Restrocards";
import { burgerking } from "./config";
export const Body = () => {

    return (
      <div className="resturent-list">
  
        {burgerking.map((resturent)=>{
          return <RestroCards {...resturent.info} key={resturent.info.id}/>
        })}
       
       
      
    
      </div>
    );
  };