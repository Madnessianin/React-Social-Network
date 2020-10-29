import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import { getProfile } from '../../Redux/profile-selectors'
import {saveProfileInfo} from '../../Redux/profile-reducer'
import Edit from './GeneralEdit/GeneralEditConteiner'
import NavBarEdit from './NavBarEdit/NavBarEdit'




class EditConteiner extends React.Component {
    
    render() {
        if (this.props.profile == null){
            return <Redirect to="/profile" />
        }
        return (
        <div>
            <NavBarEdit />
            <div>
                <Route path = "/edit" render = {()=> <Edit profile = {this.props.profile}
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

