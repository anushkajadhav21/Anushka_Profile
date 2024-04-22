import React from "react";
import ReactDom from "react-dom";
import './index.css'
import Profile from "./Profile";
import Desc from "./Desc";
import { RouterProvider , createBrowserRouter } from "react-router-dom";
import Location from "./Location";
import ProfileMap from "./ProfileMap";
import Decs from "./Decs";
import Decription from "./Decription";

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Profile/>
  },
  {
    path: '/desc',
    element: <Desc/>
  },
  {
    path: '/map',
    element: <ProfileMap/>
  }, 
  {
    path: '/decs',
    element: <Decs/>
  },
  {
    path: '/decri',
    element: <Decription/>
  }

])

ReactDom.render(
   <>
   <RouterProvider router={myRouter}/>

   </>
  ,document.getElementById("root"),
  ()=>console.log("renderd")
)