import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUser, getStatus, updateStatus, savePhoto} from '../../Redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { getAutorizedUserId, getProfile, getUserStatus } from '../../Redux/profile-selectors';

class ProfileConteiner extends React.Component {
  
  checkProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId
    }
    this.props.getUser(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.checkProfile()
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId){
      this.checkProfile()
    }
  }

    render() {   
      return (<Profile {...this.props} 
        profile = {this.props.profile} 
        status = {this.props.status}
        isOwner = {!this.props.match.params.userId}
        updateStatus = {this.props.updateStatus}
        savePhoto = {this.props.savePhoto} />)
   }
}



let mapStateToProps = (state) => ({
  profile: getProfile(state),
  status : getUserStatus(state),
  autorizedUserId : getAutorizedUserId(state)
})

let mapDispatchToProps = {getUser, getStatus, updateStatus, savePhoto}




export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileConteiner);