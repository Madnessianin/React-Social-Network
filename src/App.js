import React, { useEffect } from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginConteiner from "./Components/Login/LoginConteiner";
import { initializeApp } from "./Redux/app-reducer";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./Components/Common/Preloader/Preloader";
import { getInitialized } from "./Redux/app-selectors";
import Page from "./Components/Page/Page";

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
        <Route path="/login" render={() => <LoginConteiner />} />
        <Route path="/app" render={() => <Page />} />
      </Switch>
    </div>
  );
};

export default App;
