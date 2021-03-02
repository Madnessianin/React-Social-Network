import React from "react";
import { sendMessage } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import { compose } from "redux";
import { getDialogs, getMessages } from "../../Redux/dialogs-selectors";

const mapStateToProps = (state) => ({
  dialogs: getDialogs(state),
  messages: getMessages(state),
});
const mapDispatchToProps = {
  sendMessage,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
