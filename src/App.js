import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersConteiner from './components/Users/UsersConteiner';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className = "app-wrapper">
        <Header />
        <NavBar />
        <div className = "app-wrapper-content">
          <Route path = "/profile" render = {() => <Profile />}/>
          <Route path = "/dialogs" render = {() => <DialogsConteiner />}/>
          <Route path = "/news" component = {News}/>
          <Route path = "/music" component = {Music}/>
          <Route path = "/users" render = {() => <UsersConteiner />}/> 
          <Route path = "/settings" component = {Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
