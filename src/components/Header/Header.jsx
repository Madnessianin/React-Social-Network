import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Settings from '../Settings/Settings';
import style from'./Header.module.css';





const Header = (props) => {
    let [menuMode, setMenuMode] = useState(false)
    
    return <header className={style.header}>
        <div className = {style.wrapper}>
            <div className = {style.inner}>
                <img className = {style.img} src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" />
                <div className={style.login_block}> {
                    props.isAuth ? <div>{props.login} <button onClick = {() => {setMenuMode(!menuMode)}} 
                                                              className = {style.btn}></button></div>
                    : <NavLink to={"/login"} >Login</NavLink>}
                </div>
            </div>
            {menuMode ? <Menu logout = {props.logout} leftToMenuMode = {() => {setMenuMode(false)}} /> : <></>}
        </div>
    </header>
}

const Menu = ({leftToMenuMode, logout}) => {
    return (
        <div className = {style.menu} onBlur = {leftToMenuMode}>
            <div className = {style.link}>
                <NavLink onClick = {leftToMenuMode} to="/profile">Profile</NavLink>
            </div>
            <div className = {style.link}>
                <NavLink onClick = {leftToMenuMode} to="/settings">Settings</NavLink>
            </div>
            <div className = {style.out}>
                <a className= {style.outBtn} onClick = {logout}>Out</a>
            </div>
            
        </div>
    )
}

export default Header;