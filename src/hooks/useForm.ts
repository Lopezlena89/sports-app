import { useEffect, useMemo, useState } from "react"

export const useForm = (initialState = {},formValidations={}) => {
    
    const [formState, setFormState] = useState(initialState);
    const [formValidation, setFormValidation] = useState({})
   
    useEffect(() => {
        createValidators()
    }, [formState])

    const isFormValid = useMemo(() => {
        for (const FormValid of Object.keys(formValidation)) {
            if(formValidation[FormValid] !== null) return false
        }
        return true
    }
    , [formValidation])
    

    const onInputChange =({target}) =>{

        const {name,value} = target;

        setFormState({
            ...formState,
            [name]:value
        })

    }

    const onResetForm = () =>{
        setFormState(initialState);
    }

    const createValidators = () =>{

        const formCheckValues = {}

        for (const formValid of Object.keys(formValidations)) {
            
            const [fn,errorMessage] = formValidations[formValid];
            formCheckValues[`${formValid}Valid`] = fn(formState[formValid])?null:errorMessage;
            setFormValidation(formCheckValues);

        }


    }
  
    
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
        
  }
}
