import { NavLink } from "react-router-dom"


export const MainSports = () => {
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
                <span>Hoy</span>
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
                <span>En vivo</span>
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
            <span>Liga española</span>
            <span>Liga inglesa</span>
            <span>Liga francesa</span>
            <span>Liga italiana</span>
            <span>Liga alemana</span>
          </div>

          <div className="marcadores">

          </div>
        </div>

      </div>
    </>
  )
}
