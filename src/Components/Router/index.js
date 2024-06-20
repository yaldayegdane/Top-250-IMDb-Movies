import Home from "../../Pages/Home";
import SingleMovie from "../../Pages/SingleMovie";
import Search from "../../Pages/Search";
import Genre from "../../Pages/Genre";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/movie/:id",
      element:<SingleMovie />,
    },
    {
      path:"search",
      element:<Search />
    },
    {
      path:"/genre/:id",
      element:<Genre />
    },
    {
        path:"*",
        element:<h1>not found</h1>,
    }
  ]);

  export default function Router (){
    return <RouterProvider router={router} />
  }
