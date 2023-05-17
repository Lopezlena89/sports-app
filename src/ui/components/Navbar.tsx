import logo from '../../assets/nba-logo.png'
import search  from '../../assets/search.png';



export const Navbar = () => {

  

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
          
          <div>
            Basketball
          </div>
          <div>
            Teams
          </div>
          <form className='search-bar'>
            <input type="text" placeholder='search' name='q' />
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
