import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../Common/FormsControl/FormsControl'
import style from '../Edit.module.css'

const ContactForm = ({handleSubmit, contacts, changeSaved}) => {
    return (
        <form className = {style.formWrapper} onSubmit = {handleSubmit}>
            <div className = {style.formInner}>
                {Object.keys(contacts).map(key => {
                    return (
                    <div className = {style.formItem} key={key}>
                        <label className = {style.formLabel} for = {key}>{key + " :"}</label> 
                        <Field  name = {"contacts." + key}
                                placeholder = {key}
                                component = {Input}/>
                    </div>
                    )
                })}
            </div>
            <div>
                <button className = {style.formBtn} onClick={changeSaved}>Save change</button>
            </div>
        </form>
    )
}

const ContactReduxForm = reduxForm({form: 'contactsInfo'})(ContactForm)

export default ContactReduxForm;

