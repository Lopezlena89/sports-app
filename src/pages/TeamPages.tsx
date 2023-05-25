import { useParams } from "react-router-dom";
import {getTeamId} from '../helpers/getTeamId';
import {getPlayerId} from '../helpers/getPlayerId';
import { PlayersCard } from "../components/PlayersCard";

export const TeamPages = () => {

  const {teamId}= useParams();
  
  const {team} = getTeamId(teamId);
 

  const player:[] = getPlayerId(team)
  

  return (
    <>
       <div className="mainpage-container">
        <img className="img-team" src={`../../nba/${teamId}.png`} alt="" />
        
        <div className="img-players">
          <h2>Players</h2>
            {
              player.map(player=>(
                <PlayersCard key={player.playerId} player={player}/>
              ))
            }
          </div>
       </div>
        
    </>
  )
}
