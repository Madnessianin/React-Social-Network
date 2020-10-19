import React from 'react';
import Header from './Header';

import { connect } from 'react-redux';
import {setAuth, logout} from '../../Redux/auth-reducer'
import { getIsAuth, getLogin } from '../../Redux/auth-selectors';


class HeaderConteiner extends React.Component {
       
    render() {
    return (<Header {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
});
const mapDispatchToProps = {logout}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderConteiner);