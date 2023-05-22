import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"
import { useAppDispatch } from "../../store/basket/hooks"

const formData = {
  email:'',
  password:'',
  displayName : ''
}


export const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const {formState,displayName,email,password,onInputChange,onResetForm} =useForm(formData)

  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <>
        <div className="container-init">
            <div className="caja-init">
              <span className="span">Crear Cuenta</span>
              <div className="nombre">
                <input 
                  type="text" 
                  placeholder="nombre completo"
                  name='displayName'
                  value={displayName}
                  onChange={onInputChange}
                  />
              </div>
              <div className="correo">
                  <input 
                    type="email" 
                    placeholder="correo" 
                    name='email'
                    value={email}
                    onChange={onInputChange}
                  />
              </div>
              <div className="password"> 
                  <input 
                    type="password" 
                    placeholder="password"
                    name='password'
                    value={password}
                    onChange={onInputChange}
                  />
              </div>
              <form onSubmit={onSubmit} className="crear-cuenta">
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
