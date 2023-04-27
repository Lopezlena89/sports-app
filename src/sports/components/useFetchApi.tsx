import { useEffect, useState } from "react";
import { sportApi } from "../../../api/sportApi";


export const useFetchApi = (num:Number) => {
  
    const [liga, setLiga] = useState({});
    const [isLoading,setIsLoading]=useState(false);
    const funcionalidad = async()=>{
        const {result} = await sportApi(num);
        setLiga(result)
        setIsLoading(true);
    }
    useEffect(() => {

      funcionalidad()
    }, [num])
    return{liga,isLoading}
}
