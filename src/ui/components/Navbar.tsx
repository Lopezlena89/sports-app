import {  NavLink } from "react-router-dom"


export const Navbar = () => {

  return (
   <>   
    <div className="container-map">
        <nav className="navegador">
            <NavLink 
                className='navegador-img'
                to="/"
            >
                <img className="img" src="../../assets/balon.jpg" alt="balon" />    
            </NavLink>
            <NavLink 
                className='futbol'
                to="/futbol"
            >
                <span>Futbol</span>
            </NavLink>

            <NavLink 
                className='basketball'
                to="/basketball"
            >
                <span>Basketball</span>
            </NavLink>
            <NavLink 
                className='futAmericano'
                to="/futAmericano"
            >
                <span>Futbol Americano</span>
            </NavLink>
            <NavLink 
                className='baseball'
                to="/baseball"
            >
                <span>Baseball</span>
            </NavLink>
            <NavLink 
                className='tenis'
                to="/tenis"
            >
                <span>Tenis</span>
            </NavLink>
            <NavLink 
                className='noticias'
                to="/noticias"
            >
                <span>Noticias  </span>
            </NavLink>
            
            <input type="text" />
            <span>Luis Mariano</span>
            <img className="usuario" src="" alt="" />
            

        </nav>
    </div>    
        
   </>
  )
}
