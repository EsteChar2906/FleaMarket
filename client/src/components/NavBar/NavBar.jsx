import { Link } from 'react-router-dom'
import { SearchBar } from '../SearchBar/SearchBar'
import './NavBar.css'
import logo from '../../images/logouno.png'
import carrito from '../../images/carrito.png'

function NavBar() {
  return (
    <nav className="block__nav">
      
        <div className='block__nav__div-one'>
          <div>
            <Link to="/">
              <img className="logonav"   alt="" />
            </Link>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>

        <div className='block__nav__div-two' >
          <div>
            <img className="logocarrito"   alt="" />
          </div>
          <div>
            <Link to="/register">
              <p>Register</p>
            </Link>
          </div>
          <div>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div>
        </div>
     
    </nav>
  )
}

export default NavBar
