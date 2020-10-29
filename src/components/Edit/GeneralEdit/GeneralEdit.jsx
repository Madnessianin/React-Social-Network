import React from 'react'
import { useState } from 'react';
import ContactReduxForm from '../ContactForm/ContactForm';
import ProfileDataReduxForm from '../ProfileDataForm/ProfileDataForm';


const GeneralEdit = (props) => {
    let [saveChange, setSaveChange] = useState(false)
    const onSubmit = (data) => {
        console.log(data)
        props.saveProfileInfo(data)
    }
    return (
    <div>
        {saveChange && <div>Change saved!</div>}
        <ProfileDataReduxForm initialValues = {props.profile} 
                              onSubmit = {onSubmit} 
                              changeSaved = {()=>{setSaveChange(true)}}/>
    </div>
    )
}

export default GeneralEdit;