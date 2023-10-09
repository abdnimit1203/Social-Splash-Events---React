import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from './../pages/Login/Login';
import Registration from './../pages/Registration/Registration';
import FeaturedIdeas from "../pages/FeaturedIdeas/FeaturedIdeas";
import UpcomingEvents from "../pages/UpcomingEvents/UpcomingEvents";
import UserProfile from "../pages/UserProfile/UserProfile";
import SingleEventCard from "../components/SingleEventCard/SingleEventCard";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";

export const router = createBrowserRouter([
    {
       path: "/",
       element: <MainLayout></MainLayout>,
       errorElement: <ErrorPage></ErrorPage>,
       children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("/events.json"),
        },
        {
            path: "/featured-ideas",
            element: <PrivateRoute><FeaturedIdeas></FeaturedIdeas></PrivateRoute>,
            
        },
        {
            path: "/upcoming-events",
            element:<UpcomingEvents></UpcomingEvents> ,
            
        },
        {
            path: "/user-profile",
            element:<UserProfile></UserProfile> ,
            
        },
        {
            path: "/about",
            element:<About></About>,
            
        },
        {
            path: "/login",
            element:<Login></Login> ,
        },
        {
            path: "/registration",
            element: <Registration></Registration>,
        },
        {
            path: "/event/:id",
            element:<PrivateRoute><SingleEventCard></SingleEventCard></PrivateRoute>,
            loader: ()=> fetch("/events.json") 
        }
       ]
       
    }
])