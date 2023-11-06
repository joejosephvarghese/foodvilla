import { IMG_URL_CDN } from "./config"

export const RestroCards=({name,cuisines,avgRating,cloudinaryImageId})=>{
 
    return (
      <div className="card">
        <img src={IMG_URL_CDN +
        cloudinaryImageId}>
        </img>
  
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
  
      </div>
    )
  }
  