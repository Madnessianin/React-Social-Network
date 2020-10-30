import React from 'react'
import {Route} from 'react-router-dom'
import ContactEdit from './ContactEdit/ContactEdit'
import style from './Edit.module.css'
import GeneralEdit from './GeneralEdit/GeneralEdit'
import NavBarEdit from './NavBarEdit/NavBarEdit'



const Edit = (props) => {
    
    return (
        <div className = {style.inner}>
        <NavBarEdit />
        <div className = {style.content}>
            <Route path = "/edit/general" render = {()=> <GeneralEdit profile = {props.profile}
                                                              saveProfileInfo = {props.saveProfileInfo} />} />
            <Route path = "/edit/contacts" render = {()=> <ContactEdit profile = {props.profile}
                                                              saveProfileInfo = {props.saveProfileInfo} />} />
        </div>
    </div>
    )
}


export default Edit;