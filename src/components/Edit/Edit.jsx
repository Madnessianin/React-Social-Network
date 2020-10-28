import React from 'react'
import { useState } from 'react';
import ProfileDataReduxForm from './ProfileDataForm/ProfileDataForm';


const Edit = (props) => {
    let [saveChange, setSaveChange] = useState(false)
    const onSubmit = (data) => {
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

export default Edit;