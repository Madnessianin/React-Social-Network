import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../Common/FormsControl/FormsControl'
import style from '../Edit.module.css'

const ProfileDataForm = ({handleSubmit, changeSaved}) => {
    return (   
        <form className = {style.formWrapper} onSubmit = {handleSubmit}>
            <div className = {style.formInner}>
                <div className = {style.formItem}>
                    <label className = {style.formLabel} for = {"fullName"}>{"fullName: "}</label>
                    <Field name = {"fullName"}
                        placeholder = {""}
                        component = {Input}
                        validate = {[]} />
                </div>
                <div className = {style.formItem}>
                    <label className = {style.formLabel} for = {"aboutMe"}>{"aboutMe: "}</label>
                    <Field name = {"aboutMe"}
                        placeholder = {""}
                        component = {Input}
                        validate = {[]} />
                </div>
                <div className = {style.formItem}>
                    <label className = {style.formLabel} for = {"lookingForAJob"}>{"lookingForAJob: "}</label>
                    <Field name = {"lookingForAJob"}
                        placeholder = {""}
                        component = {Input}
                        validate = {[]}
                        type = {"checkbox"} />
                </div>
                <div className = {style.formItem}>
                <label className = {style.formLabel} for = {"lookingForAJobDescription"}>{"My profecional skills: "}</label>
                <Field name = {"lookingForAJobDescription"}
                    placeholder = {""}
                    component = {Textarea}
                    validate = {[]}
                    type = {"text"} />
            </div>
            </div>
            <div>
                <button className = {style.formBtn} onClick={changeSaved}>Save change</button>
            </div>
        </form>
    )
}
const ProfileDataReduxForm = reduxForm({form: 'profileInfo'})(ProfileDataForm)
export default ProfileDataReduxForm;
