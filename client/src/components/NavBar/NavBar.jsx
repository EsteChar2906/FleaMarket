import { Link } from 'react-router-dom';
import {SearchBar} from '../SearchBar/SearchBar';
import "./NavBar.css"
import logo from "../../images/logouno.png"
import carrito from "../../images/carrito.png"
import { Login } from "../Login/Login.jsx"

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
        <li>
          <Login />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;