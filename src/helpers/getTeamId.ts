import {teams} from '../assets/team';

interface Team{
    team: number;
    abbreviation: string;
    teamName: string;
    simpleName: string;
    location: string;
}

export const getTeamId = (teamName:string):Team => {
    
   

    return teams.find(team=>(team.teamName === teamName))

        
}
