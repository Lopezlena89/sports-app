import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/navbar"

import { MainPage,FutbolPage,BasketballPage,FutbolAmericanoPage,BaseballPage,Tenis,Noticias } from "../pages"


export const SportsRoutes = () => {
  
  return (
   <>

      <Navbar/>
      <div className="sports-routes">      
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='futbol' element={<FutbolPage/>}/>
            <Route path='basketball' element={<BasketballPage/>}/>
            <Route path='futAmericano' element={<FutbolAmericanoPage/>}/>
            <Route path='baseball' element={<BaseballPage/>}/>
            <Route path='tenis' element={<Tenis/>}/>
            <Route path='noticias' element={<Noticias/>}/>

            
            <Route path='/*' element={<Navigate to='/futbol'/>}/>
            
        </Routes>
      </div>
   </>
  )
}
