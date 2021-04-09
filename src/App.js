import React, { useEffect } from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import { initializeApp } from "./Redux/app/app-reducer";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./Components/Common/Preloader/Preloader";
import { getInitialized } from "./Redux/app/app-selectors";
import Page from "./Components/Page/Page";
import Login from "./Components/Authorization/Login/Login";

const App = () => {
  const dispach = useDispatch();
  const initialized = useSelector((state) => getInitialized(state));

  useEffect(() => {
    dispach(initializeApp());
  }, []);

  if (!initialized) {
    return <Preloader />;
  }
  return (
    <div className="conteiner">
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/app"} />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/app" render={() => <Page />} />
      </Switch>
    </div>
  );
};

export default App;
