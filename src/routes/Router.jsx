import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from './../pages/Login/Login';
import Registration from './../pages/Registration/Registration';

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
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/registration",
            element: <Registration></Registration>,
        }
       ]
       
    }
])