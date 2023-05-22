import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { LoginPage,RegisterPage } from "../auth/pages";
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
        path:'team/:teamId',
        element:<TeamPages/>
      },
      {
        path: "/",
        element: 
         <Navigate to='/main'/>
        ,
      },
    ]
  },
  {
    path: "/login",
    element: 
      <LoginPage/>
    
  },
  {
    path: "/register",
    element: 
      <RegisterPage/>
    
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
