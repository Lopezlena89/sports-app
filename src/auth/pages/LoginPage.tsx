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
              <div  className="login-cuenta">
                <button type="submit">
                    Login
                </button>
                <button onClick={onGoogleSignIn}>
                    Google
                </button>
              </div>
            </form>
            
            <Link className="link"  to="/register">
                Crear cuenta
            </Link>
            
        </div>  
      </div>
    </>
  )
}
