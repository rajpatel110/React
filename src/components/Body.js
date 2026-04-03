import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";




const Body = () => {

    const[listOfRestaurants,setListOfRestaurant]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.3912158&lng=80.3559814&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json?.data?.cards);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    //filter logic

                    const filteredList=listOfRestaurants.filter(
                        (res) => res.info.avgRating && res.info.avgRating > 4
                    );
                    setListOfRestaurant((filteredList));
                }}
                >Top Rated restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;