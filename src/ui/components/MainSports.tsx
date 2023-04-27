import { useState } from "react";
import { NavLink } from "react-router-dom"
import { LigaEspanola } from "../../sports/components/LigaEspanola";
import { useFetchApi } from "../../sports/components/useFetchApi";



export const MainSports = () => {
  
    const [paises, setPaises] = useState(302)

    const {liga,isLoading} = useFetchApi( paises);
  

  return (
    <>
      <div className="main-sports">
        <div className="head">
            <NavLink 
                className='deporcity'
                to="/"
            >
                Deporcity.com 
            </NavLink>
            <NavLink 
                className='futbol'
                to="/"
            >
                <span>En vivo</span>
            </NavLink>
            <NavLink 
                className='futbol'
                to="/"
            >
                <span >Hoy</span>
            </NavLink>
            <NavLink 
                className='futbol'
                to="/"
            >
                <span>Mañana</span>
            </NavLink>
            <NavLink 
                className='futbol'
                to="/"
            >
                <span>Calendario</span>
            </NavLink>
            <NavLink 
                className='futbol'
                to="/"
            >
                <span>Me gusta</span>
            </NavLink>
        </div>
        <div className="body">
          <div className="teams">
            <span onClick={()=> setPaises(302)}>Liga española</span>
            <span onClick={()=> setPaises(152)}>Liga inglesa</span>
            <span onClick={()=> setPaises(168)}>Liga francesa</span>
            <span onClick={()=> setPaises(207)}>Liga italiana</span>
            <span onClick={()=> setPaises(175)}>Liga alemana</span>
          </div>

          <div className="tabla">
            
          {
            isLoading && <LigaEspanola datos={liga}/>
            
            
            
            }
               
            
          </div>
        </div>

      </div>
    </>
  )
}
