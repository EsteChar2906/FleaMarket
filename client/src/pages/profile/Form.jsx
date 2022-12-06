import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../context/authProvider";
import { BACK_DOMINIO, FRONT_DOMINIO } from "../../config.js"
import styles from "./Form.module.css"


const Form = ({closeModal}) => {

    const { userStorage, handleLogout } = useContext(AuthContext);
    if (userStorage) {
        var id = userStorage.id
    }

    const [user, setUser] = useState("");
    const [changes, setChanges] = useState({});
    console.log("cambios", changes)
    const getUser = () => {
        axios.get(`${BACK_DOMINIO}/api/user/${id}`)
            .then((data) => { setUser(data.data) })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => getUser(), console.log("yo", user), [])

    function handleChanges(e) {
        e.preventDefault()
        setChanges({
            ...changes,
            [e.target.name]: e.target.value
        })
    }

    async function update() {
        try {
            let resp = window.confirm("Updated profile, to see the changes you must log in again")
            if (resp === true) {
                const resp = await axios.put(`${BACK_DOMINIO}/api/user/${id}`, changes);
                console.log("respuesta", resp.data)
                handleLogout()
                closeModal()
                window.location.href = `${FRONT_DOMINIO}/login`
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.block__contenedorformprofile}>
            <div className={styles.block__contenedorform}>
                <form className={styles.block__contenedorformdos} >
                    <div className={styles.block__contenedordiv}>
                        <div className={styles.block__contenedordivdos}>
                            <label>Firstname</label>
                        </div>

                        <input type="text" placeholder={user.firstname} name="firstname" onChange={handleChanges} />
                        <br />
                    </div>

                    <div className={styles.block__contenedordiv}>
                        <div className={styles.block__contenedordivdos}>
                            <label>Lastname</label>
                        </div>

                        <input type="text" placeholder={user.lastname} name="lastname" onChange={handleChanges} />
                        <br />
                    </div>

                    <div className={styles.block__contenedordiv}>
                        <div className={styles.block__contenedordivdos}>
                            <label>Username</label>
                        </div>
                        <input type="text" placeholder={user.username} name="username" onChange={handleChanges} />
                        <br />
                    </div>

                    <div className={styles.block__contenedordiv}>
                        <div className={styles.block__contenedordivdos}>
                            <label>Email</label>
                        </div>

                        <input type="text" placeholder={user.email} name="email" onChange={handleChanges} />
                        <br />
                    </div>

                    {/* <label>password</label>
                    <input type="text" placeholder="new password" name="password" onChage={handleChanges} />
                    <br /> */}

                    <div className={styles.block__contenedordiv}>
                        <div className={styles.block__contenedordivdos}>
                            <label>Country</label>
                        </div>

                        <input type="text" placeholder={user.country} name="country" onChange={handleChanges} />
                        <br />

                    </div>

                    <div className={styles.block__contenedordiv}>
                        <div className={styles.block__contenedordivdos}>
                            <label>City</label>
                        </div>

                        <input type="text" placeholder={user.city} name="city" onChange={handleChanges} />
                        <br />
                    </div>                

                    <div className={styles.block__contenedordiv}>
                        <div className={styles.block__contenedordivdos}>
                            <label>Addres</label>
                        </div>

                        <input type="text" placeholder={user.addres} name="addres" onChange={handleChanges} />
                        <br />
                    </div>

                    <div className={styles.block__contenedordiv}>
                        <div className={styles.block__contenedordivdos}>
                            <label>Telephone</label>
                        </div>

                        <input type="text" placeholder={user.telephone} name="telephone" onChange={handleChanges} />
                        <br />
                    </div>

                </form>        
            </div>
                <button className={styles.block__profilebutton} onClick={update}>Update</button>
        </div>
    )
}

export default Form;