import {teams} from '../assets/team';



export const getTeamId = (teamName) => {
    
    return teams.find(team=>(team.teamName === teamName))

        
}

export const getTeamByName = (name = '') => {

    
    
    return teams.find(team=>team.teamName.includes(name))
}
