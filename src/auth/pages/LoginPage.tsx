import { Link } from "react-router-dom"



export const LoginPage = () => {

    
  return (
    <>
      <div className="container-init">
        <div className="caja-init">
            <span>Login</span>
            <div className="correo" >
              <input type="email" placeholder="email" />
            </div>
            <div className="password"> 
              <input type="password" placeholder="password" />
            </div>
            <form className="login-cuenta">
              <button>
                  Login
              </button>
              <button>
                  Google
              </button>
            </form>
            
            <Link className="link"  to="/register">
                Crear cuenta
            </Link>
            
        </div>  
      </div>
    </>
  )
}
