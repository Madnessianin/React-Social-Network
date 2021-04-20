import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { getChats } from "./../../Redux/chats/chats-reducer";
import { getDialogs } from "./../../Redux/chats/chats-selectors";
import Preloader from "../Common/Preloader/Preloader";
import ChatsList from "./ChatList/ChatsList";
import MessagesList from "./Messages/Messages";

const Chats = () => {
  const chats = useSelector((state) => getDialogs(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChats());
  }, []);

  if (!chats) {
    return <Preloader />;
  }
  return (
    <Switch>
      <Route
        exact
        path="/app/dialogs"
        render={() => <Redirect to={"/app/dialogs/chats"} />}
      />
      <Route path="/app/dialogs/chats" render={() => <ChatsList />} />
      <Route
        path="/app/dialogs/room/:chatId?"
        render={() => <MessagesList />}
      />
    </Switch>
  );
};

export default Chats;
