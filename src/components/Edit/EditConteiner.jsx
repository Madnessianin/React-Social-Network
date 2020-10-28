import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getProfile } from '../../Redux/profile-selectors'
import {saveProfileInfo} from '../../Redux/profile-reducer'
import Edit from './Edit'


import ProfileDataReduxForm from './ProfileDataForm/ProfileDataForm'

class EditConteiner extends React.Component {
    
    render() {
        if (this.props.profile == null){
            return <Redirect to="/profile" />
        }
        return <Edit profile = {this.props.profile}
                     saveProfileInfo = {this.props.saveProfileInfo} />
    }
}

let mapStateToProps = (state) => ({
    profile: getProfile(state)
  })
  
let mapDispatchToProps = {saveProfileInfo}

export default connect(mapStateToProps, mapDispatchToProps)(EditConteiner);

