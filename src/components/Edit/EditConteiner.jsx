import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route, useRouteMatch } from 'react-router-dom'

import { getProfile } from '../../Redux/profile-selectors'
import {saveProfileInfo} from '../../Redux/profile-reducer'
import GeneralEdit from './GeneralEdit/GeneralEdit'
import NavBarEdit from './NavBarEdit/NavBarEdit'
import ContactEdit from './ContactEdit/ContactEdit'
import style from './EditConteiner.module.css'




class EditConteiner extends React.Component {
    
    render() {
        if (this.props.profile == null){
            return <Redirect to="/profile" />
        }
        /* let { path, url } = useRouteMatch(); */
        return (
        <div className = {style.inner}>
            <NavBarEdit />
            <div className = {style.content}>
                <Route path = "/edit/general" render = {()=> <GeneralEdit profile = {this.props.profile}
                                                                  saveProfileInfo = {this.props.saveProfileInfo} />} />
                <Route path = "/edit/contacts" render = {()=> <ContactEdit profile = {this.props.profile}
                                                                  saveProfileInfo = {this.props.saveProfileInfo} />} />
            </div>
        </div>
        )
        
    }
}

let mapStateToProps = (state) => ({
    profile: getProfile(state)
  })
  
let mapDispatchToProps = {saveProfileInfo}

export default connect(mapStateToProps, mapDispatchToProps)(EditConteiner);

