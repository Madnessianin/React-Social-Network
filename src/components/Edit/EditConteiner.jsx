import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

import { getProfile } from '../../Redux/profile-selectors'
import {saveProfileInfo} from '../../Redux/profile-reducer'
import GeneralEdit from './GeneralEdit/GeneralEdit'
import NavBarEdit from './NavBarEdit/NavBarEdit'
import ContactEdit from './ContactEdit/ContactEdit'




class EditConteiner extends React.Component {
    
    render() {
        if (this.props.profile == null){
            return <Redirect to="/profile" />
        }
        return (
        <div>
            <NavBarEdit />
            <BrowserRouter basename = '/edit'>
                <Route path = "/" render = {()=> <GeneralEdit profile = {this.props.profile}
                                                                  saveProfileInfo = {this.props.saveProfileInfo} />} />
                <Route path = "/contacts" render = {()=> <ContactEdit contacts = {this.props.profile.contacts}
                                                                  saveProfileInfo = {this.props.saveProfileInfo} />} />
            </BrowserRouter>
        </div>
        )
        
    }
}

let mapStateToProps = (state) => ({
    profile: getProfile(state)
  })
  
let mapDispatchToProps = {saveProfileInfo}

export default connect(mapStateToProps, mapDispatchToProps)(EditConteiner);

