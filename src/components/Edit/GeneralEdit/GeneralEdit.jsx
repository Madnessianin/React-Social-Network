import React from 'react'
import { useState } from 'react';
import ProfileDataReduxForm from '../ProfileDataForm/ProfileDataForm';
import style from '../Edit.module.css'

const GeneralEdit = (props) => {
    let [saveChange, setSaveChange] = useState(false)
    const onSubmit = (data) => {
        props.saveProfileInfo(data)
    }
    return (
    <div className = {style.form}>
        {saveChange && <div>Change saved!</div>}
        <ProfileDataReduxForm initialValues = {props.profile} 
                              onSubmit = {onSubmit} 
                              changeSaved = {()=>{setSaveChange(true)}}/>
    </div>
    )
}

export default GeneralEdit;