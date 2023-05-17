import { Link } from "react-router-dom"

export const TeamCard = ({team}) => {
  return (
    <>
        <img key={team.teamName} src={`../../nba/${team.teamName}.png`} alt={team.teamName}  width='100px' height='100px'/>
        <Link to={`/team/${team.teamName}`}>
            Mas..
        </Link>
    </>
  )
}
