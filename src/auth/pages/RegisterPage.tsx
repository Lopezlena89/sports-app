import { useSelector } from "react-redux"
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
  const {errorMessage} =useSelector(state=>state.auth)

  const {formState,displayName,email,password,onInputChange,onResetForm} =useForm(formData)

  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <>
        <div className="container-init">
            <div className="register-caja-init">
              <span className="register-span">Crear Cuenta</span>
              <div className="register-nombre">
                <input 
                  type="text" 
                  placeholder="nombre completo"
                  name='displayName'
                  value={displayName}
                  onChange={onInputChange}
                  />
              </div>
              <div className="register-correo">
                  <input 
                    type="email" 
                    placeholder="correo" 
                    name='email'
                    value={email}
                    onChange={onInputChange}
                  />
              </div>
              <div className="register-password"> 
                  <input 
                    type="password" 
                    placeholder="password"
                    name='password'
                    value={password}
                    onChange={onInputChange}
                  />
              </div>
              {
                (errorMessage)
                ?
                <div className="error"><span>{errorMessage}</span></div>
                :''
              }
              <form onSubmit={onSubmit} className="register-crear-cuenta">
                <button>Crear cuenta</button>
              </form>
              <div className="register-existe">
                
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
