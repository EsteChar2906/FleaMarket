import { Link } from 'react-router-dom';
import {SearchBar} from '../SearchBar/SearchBar';

// Dummy component
// const SearchBar = () => <input type="text" defaultValue="Buscar" />

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Logo
          </Link>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>CARRITO</li>
      </ul>
    </nav>
  )
}

export default NavBar;