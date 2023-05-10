import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { MainPages,TeamPages} from "../pages";
import {BasketApp} from '../BasketApp';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: 
    <BasketApp/>
    ,
    children:[
      {
        path:'/main',
        element:<MainPages/>
      },
      {
        path:'/team:teamId',
        element:<TeamPages/>
      },
    ]
  },
  {
    path: "/login",
    element: 
      <LoginPage/>
    
  },
  {
    path: "/*",
    element: 
     <Navigate to='/main'/>
    ,
  },
  
]);



export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
