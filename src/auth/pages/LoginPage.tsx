import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { starGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useAppDispatch } from "../../store/basket/hooks"

const formData = {
  email:'',
  password:'',
}


export const LoginPage = () => {

  const {formState,onInputChange,email,password} = useForm(formData)
  
  const {status,errorMessage} = useSelector(state=>state.auth)

  const isAuthenticated = useMemo(()=>status === 'checking',[status])
  

  const dispatch = useAppDispatch();

  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(startLoginWithEmailPassword({email,password}));
  }

  const onGoogleSignIn = () =>{
    console.log('googleSignIn')
    dispatch(starGoogleSignIn());
  }
    
  return (
    <>
      <div className="container-init">
        <div className="caja-init">
            <span className="span">Login</span>
            <form onSubmit={onSubmit}>
              <div className="correo" >
                <input 
                  type="email" 
                  placeholder="email" 
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
              {
                (errorMessage)
                ?
                <div className="error"><span>{errorMessage}</span></div>
                :''
              }
              <div  className="login-cuenta">
                <button disabled={isAuthenticated} type="submit" >
                    Login
                </button>
                <button disabled={isAuthenticated} onClick={onGoogleSignIn}>
                    Google
                </button>
              </div>
            </form>
            
           <div className="link">
             
              <Link className="link"  to="/register">
                  Crear cuenta
              </Link>
           </div>
            
        </div>  
      </div>
    </>
  )
}
