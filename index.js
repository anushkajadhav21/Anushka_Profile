import React from "react";
import ReactDom from "react-dom";
import './index.css'
import Profile from "./Profile";
import Desc from "./Desc";
import { RouterProvider , createBrowserRouter } from "react-router-dom";
import Location from "./Location";


const myRouter = createBrowserRouter([
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/desc',
    element: <Desc/>
  },
  {
    path: '/location',
    element: <Location/>
  }

])

ReactDom.render(
   <>
   <RouterProvider router={myRouter}/>

   </>
  ,document.getElementById("root"),
  ()=>console.log("renderd")
)