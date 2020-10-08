import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUser, getStatus, updateStatus} from '../../Redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileConteiner extends React.Component {
    
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId
    }
    this.props.getUser(userId);
    this.props.getStatus(userId);
  }

    render() {   
      return (<Profile {...this.props} 
        profile = {this.props.profile} 
        status = {this.props.status}
        updateStatus = {this.props.updateStatus} />)
   }
}



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status : state.profilePage.status,
  autorizedUserId : state.authPage.userId
})

let mapDispatchToProps = {getUser, getStatus, updateStatus}




export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileConteiner);