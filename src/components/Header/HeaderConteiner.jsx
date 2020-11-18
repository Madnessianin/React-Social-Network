import React from 'react';
import Header from './Header';

import { connect } from 'react-redux';
import {setAuth, logout} from '../../Redux/auth-reducer'
import {getUser} from '../../Redux/profile-reducer'
import { getIsAuth, getLogin, getUserPhoto } from '../../Redux/auth-selectors';



class HeaderConteiner extends React.Component {
       
    render() {
    return (<Header {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state),
    userPhoto: getUserPhoto(state)
});
const mapDispatchToProps = {logout, getUser}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderConteiner);