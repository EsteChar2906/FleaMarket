import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import FiltUsed from '../FilterUsed/FilterUsed'
import FilterCategory from '../FilterCategory/FiltCat'

const Header =()=> {
  return (
    <header className="block__nav">
      <section>
        <div>
          <Link to="/">
            <img className="logonav" alt="" />
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <img className="logocarrito" alt="" />
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
      </section>
      <FiltUsed />
      <FilterCategory />
      <section></section>
    </header>
  )
}

export default Header
