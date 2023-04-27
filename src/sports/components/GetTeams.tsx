

export const GetTeams = (team) => {
    
    const {standing_place,
        standing_team,
        standing_P,
        standing_W,
        standing_D,
        standing_L,
        standing_F,
        standing_A,
        standing_PTS} = team;


  return (
   <>
    <div className="equipos-map">
        <div className="posicion1">
            <span>{standing_place}</span>
            <span>{standing_team}</span>
        </div>
        <div className="posicion2">
            <span>{standing_P}</span>
            <span>{standing_W}</span>
            <span>{standing_D}</span>
            <span>{standing_L}</span>
            <span>{`${standing_F} : ${standing_A}`}</span>
            <span>{standing_PTS}</span>
        </div>
        <div className="posicion3">
            <span>FORMA</span>
        </div>
    </div>
   </>
  )
}
