import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import styles from './LinkAuth0.module.css'
import login from '../../../assets/login.png'
import logouticon from '../../../assets/logout.png'
const LinkAuth0 = () => {
  const { isAuthenticated, logout } = useAuth0()

  return (
    <>
      {
        // autenticacion con auth0
        isAuthenticated ? (
          <div className={styles.logout_profile}>
            
            <div className={styles.container_profile}>
              <div>
                <a className={styles.header_btns} onClick={logout}>
                  <img
                    className={styles.logo_profile}
                    style={{ cursor: 'pointer' }}                  
                    src={logouticon}
                  />
                </a>
              </div>
              <div>
                <a
                  className={styles.labels}
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                  onClick={logout}
                  
                >
                  Logout
                </a>
              </div>
            </div>

            <div className={styles.container_profile}>
              <div>
                <Link to="/profile">
                  <img
                    className={styles.logo_profile}
                    style={{ cursor: 'pointer' }}
                    src={login}
                  />
                </Link>
              </div>

              <div>
                <Link
                  to="/profile"
                  className={styles.labels}
                  style={{ textDecoration: 'none' }}
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to="/register">
              <button className={styles.header_btns}>Register </button>
            </Link>

            <Link to="/login">
              <button className={styles.header_btns}>Login </button>
            </Link>
          </>
        )
      }
    </>
  )
}

export default LinkAuth0
