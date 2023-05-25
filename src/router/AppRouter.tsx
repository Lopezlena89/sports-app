import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { LoginPage,RegisterPage } from "../auth/pages";
import { MainPages,TeamPages} from "../pages";
import {BasketApp} from '../BasketApp';
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../ui/components/CheckingAuth";


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
  const status = useCheckAuth();
  if(status === 'checking'){
    return <CheckingAuth/>
  }

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
