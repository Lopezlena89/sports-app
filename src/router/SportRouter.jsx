import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainPages, TeamPages } from '../pages'
import { Navbar } from '../ui/components/Navbar'

export const SportRouter = () => {
  return (
    <>
      <Navbar/>
        <Routes>
            <Route path='/' element={<MainPages/>}/>
            <Route path="/teamId/:teamId" element={<TeamPages />} />
            <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
    </>
  )
}
