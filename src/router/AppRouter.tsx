import { LoginPage } from '../auth/pages/LoginPage';
import { Navbar } from '../ui/components/navbar';
import { SportsRoutes } from '../sports/routes/SportsRoutes';
import { Route, Routes } from 'react-router-dom';



export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path='login' element={<LoginPage/>}/>
            <Route path='/*' element={<SportsRoutes/>}/>
            
           
        </Routes>
    </>
  )
}
