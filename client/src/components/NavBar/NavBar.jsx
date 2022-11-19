import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import "./NavBar.css";
import logo from "../../images/logouno.png";
import carrito from "../../images/carrito.png";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbardos">
        <li>
          <Link to="/">
            <img className="logonav" src={logo} alt="" />
          </Link>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <img className="carrito" src={carrito} alt="" />
        </li>

        <Link to="/register">
          <p>Register</p>
        </Link>

        <Link to="/login">
          <p>Login</p>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
