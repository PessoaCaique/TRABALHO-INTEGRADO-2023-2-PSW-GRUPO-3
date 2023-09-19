import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Pizza Pra Galera
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : '')}>
                        Cardápio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>
                        Entrar
                    </NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar