import { useParams } from "react-router-dom";
import {getTeamId} from '../helpers/getTeamId';
import {getPlayerId} from '../helpers/getPlayerId';

export const TeamPages = () => {

  const {teamId}= useParams();
  const {team} = getTeamId(teamId);
  const player:[] = getPlayerId(team)


  return (
    <>
        <h1>TeamPages</h1>
        
    </>
  )
}
