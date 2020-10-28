import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../Common/FormsControl/FormsControl'
import style from './ProfileDataForm.module.css'

const ProfileDataForm = ({handleSubmit, changeSaved}) => {
    return (   
        <form className = {style.form} onSubmit = {handleSubmit}>
            <div className = {style.item}>
                <strong>{"fullName: "}</strong>
                <Field name = {"fullName"}
                       placeholder = {""}
                       component = {Input}
                       validate = {[]} />
            </div>
            <div className = {style.item}>
            <strong>{"AboutMe: "}</strong>
                <Field name = {"aboutMe"}
                    placeholder = {""}
                    component = {Input}
                    validate = {[]} />
            </div>
            <div className = {style.item}>
                <strong>{"lookingForAJob: "}</strong>
                <Field name = {"lookingForAJob"}
                    placeholder = {""}
                    component = {Input}
                    validate = {[]}
                    type = {"checkbox"} />
            </div>
            <div className = {style.item}>
                <strong>{"My profecional skills: "}</strong>
                <Field name = {"lookingForAJobDescription"}
                    placeholder = {""}
                    component = {Textarea}
                    validate = {[]}
                    type = {"text"} />
            </div>
            <div className = {style.item}>
                <button onClick={changeSaved}>Save change</button>
            </div>
            {/* <div className = {style.contacts}>{Object.keys(props.profile.contacts)
                .map(key => {
                return <Contact key = {key} contactKey = {key} contactValue = {props.profile.contacts[key]} />
                })}</div> */}
        </form>
    )
}
const ProfileDataReduxForm = reduxForm({form: 'profileInfo'})(ProfileDataForm)
export default ProfileDataReduxForm;
