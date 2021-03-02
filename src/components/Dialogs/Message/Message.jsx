import React from "react";
import classes from "./../Dialogs.module.css";

const Messege = (props) => {
  return <div className={classes.messages_item}>{props.message}</div>;
};

export default Messege;
