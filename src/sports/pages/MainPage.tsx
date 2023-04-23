import React from 'react'
import { MainSports } from '../../ui/components/MainSports'
import { Navbar } from '../../ui/components/navbar'

export const MainPage = () => {
  return (
    <>
        <div className="container">
            <div className="main">
                <MainSports/>
            </div>
        </div>
    </>
  )
}
