import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ContactEdit from './ContactEdit/ContactEdit'
import style from './Edit.module.css'
import GeneralEdit from './GeneralEdit/GeneralEdit'
import NavBarEdit from './NavBarEdit/NavBarEdit'



const Edit = (props) => {
    
    return (
        <div className = {style.inner}>
        <NavBarEdit />
        <div className = {style.content}>
            <Switch >
                <Route exact path = "/edit" render = {()=><Redirect to = {"/edit/general"}/>}/>
                <Route path = "/edit/general" render = {()=> <GeneralEdit profile = {props.profile}
                                                                saveProfileInfo = {props.saveProfileInfo} />} />
                <Route path = "/edit/contacts" render = {()=> <ContactEdit profile = {props.profile}
                                                                saveProfileInfo = {props.saveProfileInfo} />} />
        </Switch>
        </div>
    </div>
    )
}


export default Edit;