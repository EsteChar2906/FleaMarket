import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import FiltUsed from '../FilterUsed/FilterUsed'
import FilterCategory from '../FilterCategory/FiltCat'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'

const Header = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userLocalStorageJSON = window.localStorage.getItem('user')
    if (userLocalStorageJSON) {
      const user = JSON.parse(userLocalStorageJSON)
      setUser(user)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <header className={styles.header_contenedor}>
      <section className={styles.header_section_one}>
        <div>
          <Link to="/">
            <img className="logonav" alt="" />
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className={styles.header_section_one_car}>
        <Link to="/shoping">
          <p>carrito</p>
        </Link>
        </div>

        <div className={styles.header_div_logout_profile}>
          {user ? (
            <>
              <div className={styles.header_section_user_logout}>
                <p style={{ color: 'red' }} onClick={handleLogout}>
                  Logout
                </p>
              </div>
              <div className={styles.header_section_user_profile}>
                <Link to="/profile">
                  <p>profile</p>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className={styles.header_div_register}>
                <Link to="/register">
                  <p>Register</p>
                </Link>
              </div>
              <div className={styles.header_div_login}>
                <Link to="/login">
                  <p>Login</p>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      <section className={styles.header_section_filters}>
        <div><FilterCategory /></div>
        <div><FiltUsed /></div>       
      </section>
    </header>
  )
}

export default Header