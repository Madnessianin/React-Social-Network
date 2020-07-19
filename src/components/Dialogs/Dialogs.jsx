import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Message/Message';


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map( message => <Messege message={message.message}/> );
    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogs_inner}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messagesElements}
        </div>
    </div>
    ) 
}

export default Dialogs;