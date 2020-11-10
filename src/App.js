import React from 'react';
import style from'./App.module.css';
import NavBar from './components/NavBar/NavBar';
import { Redirect, Route,  Switch,  withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
//import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersConteiner from './components/Users/UsersConteiner';
//import ProfileConteiner from './components/Profile/ProfileConteiner';
import HeaderConteiner from './components/Header/HeaderConteiner';
import LoginConteiner from './components/Login/LoginConteiner';
import {initializeApp} from './Redux/app-reducer'
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import { getInitialized } from './Redux/app-selectors';
import { compose } from 'redux';
import withSuspense from './components/Hoc/withSuspense';
import EditConteiner from './components/Edit/EditConteiner';
const DialogsConteiner = React.lazy(() => import('./components/Dialogs/DialogsConteiner'));
const ProfileConteiner = React.lazy(() => import('./components/Profile/ProfileConteiner'));


class App extends React.Component {
  
  catchAllUnhandeledErrors = (PromiseRejectionEvent) => {
    console.error(PromiseRejectionEvent)
  }

  componentDidMount () {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandeledErrors)
  }

  componentWillUnmount () {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandeledErrors)
  }
  
  render () {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className = {style.appInner}>
        <HeaderConteiner />
        <div className = {style.appWrapper}>
          <NavBar />
          <div className = {style.content}>
            <div className = {style.contentInner}>
              <Switch >
                <Route exact path = "/" render = {()=><Redirect to = {"/profile"}/>}/>
                <Route path = "/profile/:userId?" render = {withSuspense(ProfileConteiner)}/>
                <Route path = "/dialogs" render = {withSuspense(DialogsConteiner)}/> 
                <Route path = "/news" component = {News}/>
                <Route path = "/music" component = {Music}/>
                <Route path = "/users" render = {withSuspense(UsersConteiner)}/> 
                <Route path = "/settings" component = {Settings}/>
                <Route path = "/login" render = {() => <LoginConteiner />}/>
                <Route path = "/edit" render = {() => <EditConteiner />} />
              </Switch>
            </div>
          </div>
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


