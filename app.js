import React from "react";
import ReactDOM from "react-dom/client"

/*
*Header
    -logo
    -nav items
*Body
    -search
    -restaurantcontainer
    -restaurantcard
        .name of res , rating ,cuisine, delivery time
*Footer
    -copyright
    -links
    -address
    -contact
*/

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-conainer">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard ={
    backgroundColor: "#f0f0f0",
}

const RestaurantCard=()=>{
    return(
        <div className="res-card" style={styleCard}>
            <img  className="res-logo"
            alt="res-logo"
            src= "https://static.vecteezy.com/system/resources/previews/040/986/112/non_2x/ai-generated-indian-biryani-rice-professional-advertising-foodgraphy-photo.jpg"
            />
            <h3>Four Season</h3>
            <h4>North Indian ,Biryani ,Asian</h4>
            <h4>4.2 stars</h4>
            <h4>28 minutes</h4>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">

                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

            </div>
        </div>
    )
}

const Applayout=()=>{
    return(
        <div className="app"> 
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);


