import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js";
import Body from "./components/Body.js";
//import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";


import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const About = lazy(() => import("./components/About.js"));

const Applayout=()=>{
    return(
        <div className="app"> 
            <Header/>
            <Outlet/>
        </div>
    );
};
const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:resID",
                element: <RestaurantMenu/>,
            }
        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


