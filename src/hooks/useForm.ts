import { useState } from "react"

export const useForm = (initialState = {}) => {
    
    const [useForm, setUseForm] = useState(initialState);

    const onInputChange =({target}) =>{

        const {name,value} = target;

        setUseForm({
            ...useForm,
            [name]:value
        })

    }

    const resetInput = () =>{
        setUseForm(initialState);
    }
  
    
    return{
        ...useForm,
        useForm,
        onInputChange,
        resetInput
  }
}