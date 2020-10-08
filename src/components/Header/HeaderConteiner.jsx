import React from 'react';
import Header from './Header';

import { connect } from 'react-redux';
import {setAuth, logout} from '../../Redux/auth-reducer'


class HeaderConteiner extends React.Component {
    
    componentDidMount() {
        this.props.setAuth();
    }
    
    render() {
    return (<Header {...this.props} />)
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth,
    login: state.authPage.login
});
const mapDispatchToProps = {setAuth, logout}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderConteiner);