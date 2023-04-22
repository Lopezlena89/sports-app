import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BaseballPage,BasketballPage,FutbolAmericanoPage,
        FutbolPage,Noticias,Tenis } from '../sports/pages';
import { LoginPage } from '../auth/pages/LoginPage';


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='futbol' element={<FutbolPage/>}/>
            <Route path='basketball' element={<BasketballPage/>}/>
            <Route path='futAmericano' element={<FutbolAmericanoPage/>}/>
            <Route path='baseball' element={<BaseballPage/>}/>
            <Route path='tenis' element={<Tenis/>}/>
            <Route path='noticias' element={<Noticias/>}/>

            <Route path='login' element={<LoginPage/>}/>
            <Route path='/*' element={<Navigate to='/futbol'/>}/>
           
        </Routes>
    </>
  )
}
