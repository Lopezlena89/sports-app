import logo from '../../assets/nba-logo.png'
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
          <form>
            <input type="text" />
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
