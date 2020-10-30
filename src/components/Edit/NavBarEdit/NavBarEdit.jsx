import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import style from '../../NavBar/NavBar.module.css'
import classes from './NavBarEdit.module.css'

const NavBarEdit = (props) => {
    let { url } = useRouteMatch();
    return (
        <nav className = {style.nav}>
            <div className = {classes.item}>
                <NavLink to = {`${url}/general`} activeClassName={classes.active}>General</NavLink>
            </div>
            <div className = {classes.item}>
                <NavLink to = {`${url}/contacts`} activeClassName={classes.active}>Contacts</NavLink>
            </div>
        </nav>
    )
}


export default NavBarEdit;