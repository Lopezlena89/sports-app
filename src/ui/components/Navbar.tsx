import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/nba-logo.png'
import search  from '../../assets/search.png';
import { getTeamByName } from '../../helpers/getTeamId';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';



export const Navbar = () => {

  const navigate = useNavigate();

  const {searchText,onInputChange,onResetForm} = useForm({
    searchText:''
  });
  
  const nuevaProm = async() =>{
    
    try {
      const {teamName} = await getTeamByName(searchText);
    
      navigate(`/team/${teamName}`);
    } catch (error) {
        console.log(error)
        alert('Anotar un nombre valido');
    }
    
  }
  
  const onSubmit = (e) =>{
      e.preventDefault();
      nuevaProm();
      onResetForm()
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
