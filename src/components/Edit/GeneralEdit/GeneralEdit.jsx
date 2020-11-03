import React from 'react'
import ProfileDataReduxForm from '../ProfileDataForm/ProfileDataForm';
import style from '../Edit.module.css'

const GeneralEdit = (props) => {
    
    const onSubmit = (data) => {
        props.saveProfileInfo(data)
    }
    return (
    <div className = {style.form}>
        
        <ProfileDataReduxForm initialValues = {props.profile} 
                              onSubmit = {onSubmit} />
    </div>
    )
}

export default GeneralEdit;