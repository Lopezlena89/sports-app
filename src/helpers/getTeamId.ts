import {teams} from '../assets/team';

interface Team{
    team: number,
    abbreviation: string,
    teamName: string,
    simpleName: string,
    location: string
}

export const getTeamId = (teamName:string) => {
    
    return teams.find((team:Team)=>(team.teamName === teamName))

        
}

export const getTeamByName = async(name = '') => {
    
        if(name.length <=1)return;
  
       return await teams.find((team:Team)=>team.teamName.includes(name));
       
   
      
    
}
