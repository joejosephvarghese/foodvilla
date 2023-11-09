import { RestroCards } from "./Restrocards";
import { burgerking } from "./config";
import { useState, useEffect } from "react";
import { Shimmer } from "./shimmer";

function filterdata(search, resturentlist) {
  const filterdata = resturentlist.filter((resturent) =>
    resturent?.info?.name?.toLowerCase()?. includes(search.toLowerCase())
  );
  return filterdata;
}

export const Body = () => {
  const [search, setSearch] = useState([]);
  const [resturentlist, setResturentlist] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([])
  useEffect(() => {
    getRestuents();
  }, []);

  async function getRestuents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.944005&lng=76.32809&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setResturentlist(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
//not render component
  if(!resturentlist) return null;

  if(filteredRestaurant?.length===0)return <h1>No Restuarant Match Your Search</h1>
  return (resturentlist?.length===0)? <Shimmer/>:(
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(search, resturentlist);

           setFilteredRestaurant(data);
          }}
        >
          search
        </button>
      </div>
      <div className="resturent-list">
        {filteredRestaurant.map((resturent) => {
          return <RestroCards {...resturent.info} key={resturent.info.id} />;
        })}
      </div>
    </>
  );
};
