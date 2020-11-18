import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from'./Header.module.css';
import logo from '../../assets/images/logo192.png'
import userPhoto from '../../assets/images/user.png'
import PhotoLoginConteiner from '../PhotoLogin/PhotoLoginConteiner';



const Header = (props) => {
    let [menuMode, setMenuMode] = useState(false)
    
    return <header className={style.header}>
        <div className = {style.wrapper}>
            <div className = {style.inner}>
                <img className = {style.img} src={logo} />
                <div className={style.login_block}>
                    {props.isAuth 
                    ? <NicknameWithPhoto photo = {props.userPhoto}
                                         login = {props.login} 
                                         inToMenuMode = {() => {setMenuMode(!menuMode)}} />
                    : <NavLink to={"/login"} onClick = {() => {setMenuMode(false)}}>Login</NavLink>}
                </div>
            </div>
            {menuMode ? <Menu logout = {props.logout} leftToMenuMode = {() => {setMenuMode(false)}} /> : <></>}
        </div>
    </header>
}

const NicknameWithPhoto = ({photo, inToMenuMode, login}) => {
    return (
        <div className = {style.nickName}>
            <PhotoLoginConteiner />
            <button onClick = {inToMenuMode}  className = {style.btn}></button>
        </div>
    )
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