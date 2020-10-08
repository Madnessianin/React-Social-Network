import React from 'react'
import { connect } from 'react-redux'
import {login} from '../../Redux/auth-reducer'
import Login from './Login';


const mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth,
    login: state.authPage.login
});
const mapDispatchToProps = {login}





export default connect(mapStateToProps, mapDispatchToProps)(Login);