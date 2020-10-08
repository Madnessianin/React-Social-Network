import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../Utils/Validators/validators';
import { Textarea } from '../Common/FormsControl/FormsControl';


const maxLength50 = maxLengthCreator(50)
const SendNewMessage = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component = {Textarea} 
                       name = {"newMessageText"} 
                       placeholder = {"Enter new message"}
                       validate = {[required, maxLength50]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const SendNewMessageRedux = reduxForm({form : 'addMessage'})(SendNewMessage)

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />),
        messagesElements = state.messages.map( message => <Messege message={message.message}/> ),
        addMessage = (data) => {
            props.sendMessage(data.newMessageText);
        }
    
    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogs_inner}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
            <SendNewMessageRedux onSubmit={addMessage} />
        </div>
        
    </div>
    ) 
}

export default Dialogs;