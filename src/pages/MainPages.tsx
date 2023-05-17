import {teams} from '../assets/team.js';
import { TeamCard } from '../components/TeamCard.js';

export const MainPages = () => {



  return (
    <>
        <div className='container-main'>
          <div className='teams'>
              {
                teams.map(team=>(
                  
                  <TeamCard key={team.teamName} team={team}/>
                ))
              }
          </div>
        </div>
    </>
  )
}
