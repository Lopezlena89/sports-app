import { useState } from "react"
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

const formValidations={
  email:[(value)=>value.includes('@'),'El correo debe tener un @'],
  password:[(value)=>value.length >= 6,'El password debe de tener mas de 6 letras'],
  displayName:[(value)=>value.length >=1,'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const dispatch = useAppDispatch();
  const {errorMessage} =useSelector(state=>state.auth)

  const {formState,displayName,email,password,
        onInputChange,isFormValid,displayNameValid,emailValid,passwordValid} =useForm(formData,formValidations)
      
  const onSubmit = (e) =>{
    e.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid)return;
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <>
        <div className="container-init">
            <div className="register-caja-init">
              <span className="register-span">Crear Cuenta</span>
              <span className="validacion-span">Validacion:{(isFormValid)?'Valido':'Incorrecta'}</span>
              <div className="register-nombre">
                <input 
                  type="text" 
                  placeholder="nombre completo"
                  name='displayName'
                  value={displayName}
                  onChange={onInputChange}
                  />
                  {
                    formSubmitted
                    ? <span className="span-valid-malo" >{displayNameValid}</span>
                    : <span className="span-valid" >{displayNameValid}</span>
                    
                  }
              </div>
              <div className="register-correo">
                  <input 
                    type="email" 
                    placeholder="correo" 
                    name='email'
                    value={email}
                    onChange={onInputChange}
                  />
                  {
                    formSubmitted
                    ? <span className="span-valid-malo" >{emailValid}</span>
                    : <span className="span-valid" >{emailValid}</span>
                    
                  }
              </div>
              <div className="register-password"> 
                  <input 
                    type="password" 
                    placeholder="password"
                    name='password'
                    value={password}
                    onChange={onInputChange}
                  />
                  {
                    formSubmitted
                    ? <span className="span-valid-malo" >{passwordValid}</span>
                    : <span className="span-valid" >{passwordValid}</span>
                    
                  }
              </div>
              
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
