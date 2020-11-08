import React from 'react'
import { Redirect } from 'react-router-dom'
import style from './Button.module.css'

const Button = (props) => {
    let onClickChanged = () => {
        if (props.isRedirect) {
            return <Redirect to = {"/edit"}/>
        }
    }
    return (
        <div className = {style.wrapperBtn}>
            <button className = {style.btn} onClick = {onClickChanged}>{props.textBtn}</button>
        </div>
    )
}

export default Button;