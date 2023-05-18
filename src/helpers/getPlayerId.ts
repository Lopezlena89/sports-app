import {teams} from '../assets/team';
import {players} from '../assets/players';

export const getPlayerId = (teamId:number) => {
  
    return players.filter(player=>(player.teamId === teamId))

}
