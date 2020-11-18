import React from 'react'
import { connect } from 'react-redux';
import { getLogin, getUserPhoto } from '../../Redux/auth-selectors';
import PhotoLogin from './PhotoLogin'


class PhotoLoginConteiner extends React.Component {
    render() {
        return <PhotoLogin {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    login: getLogin(state),
    userPhoto: getUserPhoto(state)
});
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoLoginConteiner)