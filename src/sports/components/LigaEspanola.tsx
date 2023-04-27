import { GetTeams } from "./GetTeams";


export const LigaEspanola = ({datos={}}) => {
   
    const { total, home, away} = datos;

   
  return (
    <>
        <div className="container-tabla">
            <div className="general">
                <span>General</span>
                <span>Local</span>
                <span>Visitante</span>
            </div>
            <div className="letras">
                <div className="posicion1">
                    <span>#</span>
                    <span>Equipo</span>
                </div>
                <div className="posicion2">
                    <span>PJ</span>
                    <span>G</span>
                    <span>E</span>
                    <span>P</span>
                    <span>G</span>
                    <span>PTS</span>
                </div>
                <div className="posicion3">
                    <span>FORMA</span>
                    
                </div>
            </div>
            
            <div className="equipos">
                {
                    total.map((team,index)=>(
                        <GetTeams 
                        key={index}
                        {...team}
                    />
                   
                     
                    ))
                }
            </div>
            
                
            
        </div>

    </>
  )
}

