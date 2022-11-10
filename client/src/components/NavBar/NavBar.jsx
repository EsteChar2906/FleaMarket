import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>LOGO</li>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>CARRITO</li>
      </ul>
    </nav>
  )
}

export default NavBar;