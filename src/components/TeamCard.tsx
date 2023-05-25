import { Link } from "react-router-dom"

export const TeamCard = ({team}) => {
  return (
    <>
        <div className="teamCard-container">
          <Link className="link" to={`/teamId/${team.teamName}`}>
            <img key={team.teamName} src={`../../nba/${team.teamName}.png`} alt={team.teamName}/>
          </Link>
        </div>
    </>
  )
}
