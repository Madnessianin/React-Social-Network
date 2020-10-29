import React from 'react'
import { useState } from 'react';
import ContactReduxForm from '../ContactForm/ContactForm';
import ProfileDataReduxForm from '../ProfileDataForm/ProfileDataForm';


const ContactEdit = (props) => {
    let [saveChange, setSaveChange] = useState(false)
    const onSubmitContact = (data) => {
        console.log(data)
        props.saveProfileInfo(data)
    }
    return (
    <div>
        {saveChange && <div>Change saved!</div>}
        <ContactReduxForm onSubmit = {onSubmitContact}
                          initialValues = {props.profile}
                          contacts = {props.profile.contacts} />
    </div>
    )
}

export default ContactEdit;