
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { MainPage } from '../basketball/pages';


const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <LoginPage/>
    ),
  },
  {
    path: "/main",
    element: (
     <MainPage/>
    ),
  },
  {
    path: "/*",
    element: (
     <Navigate to='/main'/>
    ),
  },
  
]);



export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
