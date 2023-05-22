import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <>
        <div className="container-init">
            <div className="caja-init">
              <span className="span">Crear Cuenta</span>
              <div className="nombre">
                <input type="text" placeholder="nombre completo"/>
              </div>
              <div className="correo">
                  <input type="email" placeholder="correo" />
              </div>
              <div className="password"> 
                  <input type="password" placeholder="password"/>
              </div>
              <form className="crear-cuenta">
                <button>Crear cuenta</button>
              </form>
              <div className="existe">
                <span>Ya tienes cuenta?</span>
                <Link className="link-register"  to="/login">
                  Ingresar
                </Link>
              </div>
            </div>  
         </div>
    </>
  )
}
