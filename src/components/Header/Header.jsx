import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from'./Header.module.css';
import logo from '../../assets/images/logo192.png'




const Header = (props) => {
    let [menuMode, setMenuMode] = useState(false)
    
    return <header className={style.header}>
        <div className = {style.wrapper}>
            <div className = {style.inner}>
                <img className = {style.img} src={logo} />
                <div className={style.login_block}> {
                    props.isAuth ? <div>{props.login} <button onClick = {() => {setMenuMode(!menuMode)}} 
                                                              className = {style.btn}></button></div>
                    : <NavLink to={"/login"} onClick = {() => {setMenuMode(false)}}>Login</NavLink>}
                </div>
            </div>
            {menuMode ? <Menu logout = {props.logout} leftToMenuMode = {() => {setMenuMode(false)}} /> : <></>}
        </div>
    </header>
}

const Menu = ({leftToMenuMode, logout}) => {
    return (
        <dl className = {style.menu} onBlur = {leftToMenuMode}>
            <dd className = {style.link}>
                <NavLink onClick = {leftToMenuMode} to="/profile">Profile</NavLink>
            </dd>
            <dd className = {style.link}>
                <NavLink onClick = {leftToMenuMode} to="/settings">Settings</NavLink>
            </dd>
            <dd className = {style.out}>
                <a className= {style.outBtn} onClick = {logout}>Out</a>
            </dd>
        </dl>
    )
}

export default Header;