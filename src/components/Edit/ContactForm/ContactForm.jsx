import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../Common/FormsControl/FormsControl'

const ContactForm = ({handleSubmit, contacts, changeSaved}) => {
    return (
        <form /* className={style.contacts} */ onSubmit = {handleSubmit}>
            {Object.keys(contacts).map(key => {
                return (
                <div key={key}>{key}: 
                    <Field  name = {"contacts." + key}
                            placeholder = {key}
                            component = {Input}/>
                </div>
                )
            })}
            <div /* className = {style.item} */>
                <button /* onClick={changeSaved} */>Save change</button>
            </div>
        </form>
    )
}

const ContactReduxForm = reduxForm({form: 'contactsInfo'})(ContactForm)

export default ContactReduxForm;

