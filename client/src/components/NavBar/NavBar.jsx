import { Link } from 'react-router-dom';
import {SearchBar} from '../SearchBar/SearchBar';
import "./NavBar.css"
import logo from "../../images/logouno.png"
import carrito from "../../images/carrito.png"
import usuario from "../../images/usuario.png"

// Dummy component
// const SearchBar = () => <input type="text" defaultValue="Buscar" />

function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='navbardos'>
        <li>
          <Link to="/">
            <img className='logonav' src={logo} alt="" />
          </Link>
        </li>
        <li>
          <SearchBar />
        </li>
        <li><img className='carrito' src={carrito} alt="" /></li>
        <li><img className='usuario' src={usuario} alt="" />
        
        </li>
        <h1 className='mensaje'>Iniciar Sesión</h1>
        <h1 className='mensaje'>Registrarse</h1>
        
      </ul>
    </nav>
  )
}

export default NavBar;