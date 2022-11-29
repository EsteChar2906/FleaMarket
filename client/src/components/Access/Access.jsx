import React from "react";
import { Link } from "react-router-dom";
import HeadPage from "../HeadPage/HeadPage";
import styles from "./Access.module.css"

const access = () => {

    return(
        <div >
            <HeadPage />
            <div className={styles.block__accesscontenedor}>
                <div className={styles.block__accesscontenedorazul}>
                <div className={styles.block__accesscontenedordos}>
                    <div className={styles.block__accesscontenedortexto}>
                    <h3 className={styles.block__accesscontenedortres}>¡Hi! To enter the shopping car, log in to your account</h3>

                    </div>
                    
                    <Link to="/register"  style={{textDecoration: "none" } }>
                        <button className={styles.block__accessbutton} style={{cursor: "pointer", textDecoration: "none"}}>
                             Create account 
                        </button>
                    </Link>
                    <Link to="/login"  style={{textDecoration: "none" } }>
                        <button className={styles.block__accessbutton} style={{cursor: "pointer", textDecoration: "none"}}>
                               Sing in  
                        </button>
                    </Link>
                </div>

                </div>
                

            </div>
            

            
        </div>
    )
}

export default access;