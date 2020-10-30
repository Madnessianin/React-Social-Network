import React from 'react'
import { useState } from 'react';
import ContactReduxForm from '../ContactForm/ContactForm';
import ProfileDataReduxForm from '../ProfileDataForm/ProfileDataForm';
import style from '../Edit.module.css'

const ContactEdit = (props) => {
    let [saveChange, setSaveChange] = useState(false)
    const onSubmitContact = (data) => {
        props.saveProfileInfo(data)
    }
    return (
    <div className = {style.form}>
        {saveChange && <div>Change saved!</div>}
        <ContactReduxForm onSubmit = {onSubmitContact}
                          initialValues = {props.profile}
                          contacts = {props.profile.contacts}
                          changeSaved = {()=>{setSaveChange(true)}} />
    </div>
    )
}

export default ContactEdit;