import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Message/Message';



const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />),
        messagesElements = state.messages.map( message => <Messege message={message.message}/> ),
        newMessageElement = React.createRef(),
        addMessage = () => {
            props.sendMessage();
        },
        onDialogChange = () => {
            let text = newMessageElement.current.value;
            props.updateNewMessageText(text);
        };
    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogs_inner}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
                <div>
                    <textarea ref={newMessageElement} onChange={onDialogChange} value={state.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
                
            </div>
        </div>
        
    </div>
    ) 
}

export default Dialogs;