import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/nba-logo.png'
import search  from '../../assets/search.png';
import queryString from 'query-string';
import { getTeamByName } from '../../helpers/getTeamId';
import { useForm } from '../../hooks/useForm';



export const Navbar = () => {


    const navigate = useNavigate();

    const {searchText,onInputChange,onResetForm} = useForm({
      searchText:''
    });
    
    const {teamName} = getTeamByName(searchText)
    console.log(teamName)

    const onSubmit = (e) =>{
        e.preventDefault();
        navigate(`team/${teamName}`)
    }
  

  return (
    <>
      <div className="container-nav">
        <div className="team">
          
        <div className="imagen">
          <img 
            src={logo}
            alt='nba'
            className='imagen'
           
          />
        </div>
          
        <Link to='/main'>
           Basketball
        </Link>
        <Link to='/main'>
           Teams
        </Link>
          <form onSubmit={onSubmit} className='search-bar'>
            <input 
              type="text" 
              placeholder='search' 
              name='searchText'
              value={searchText}
              onChange={onInputChange}
            />
            <button type='submit'><img src={search} alt="" width='15px' height='15px'/></button>
            
          </form>
        </div>
        <div className="usuario">
          <div>
            Luis Mariano
          </div>
          <img src="" alt="Photo" />
        </div>
      </div>
    </>
  )
}
