import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavBarEdit.module.css'

const NavBarEdit = (props) => {
    
    return (
        <nav className = {style.nav}>
            <div className = {style.link}>
                <NavLink to = "/" >General</NavLink>
            </div>
            <div className = {style.link}>
                <NavLink to = "/contacts" >Contacts</NavLink>
            </div>
        </nav>
    )
}


export default NavBarEdit;