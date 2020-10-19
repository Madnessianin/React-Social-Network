import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersConteiner from './components/Users/UsersConteiner';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import LoginConteiner from './components/Login/LoginConteiner';
import {initializeApp} from './Redux/app-reducer'
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import { getInitialized } from './Redux/app-selectors';
import { compose } from 'redux';




class App extends React.Component {
  
  componentDidMount () {
    this.props.initializeApp()
  }
  
  render () {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className = "app-wrapper">
        <HeaderConteiner />
        <NavBar />
        <div className = "app-wrapper-content">
          <Route path = "/profile/:userId?" render = {() => <ProfileConteiner />}/>
          <Route path = "/dialogs" render = {() => <DialogsConteiner />}/>
          <Route path = "/news" component = {News}/>
          <Route path = "/music" component = {Music}/>
          <Route path = "/users" render = {() => <UsersConteiner />}/> 
          <Route path = "/settings" component = {Settings}/>
          <Route path = "/login" render = {() => <LoginConteiner />}/>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: getInitialized(state)
});
const mapDispatchToProps = {initializeApp}
export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(App);


