

import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { AuthRouter } from "./AuthRouter";
import { SportRouter } from "./SportRouter";

export const AppRouter = () => {

  const status = useCheckAuth();

  if(status === 'checking'){
    return <CheckingAuth/>
  }

  return (
    <Routes>
        {
          (status === 'authenticated')
          ? <Route path='/*' element={<SportRouter/>}/>
          : <Route path='/auth/*' element={<AuthRouter/>}/>
        }
        <Route path='/*' element={<Navigate to='/auth/login'/>}/>

        {/* Login y registro */}
        
        {/* JournalApp */}
        
        <Route/>
    </Routes>
  )
}    
