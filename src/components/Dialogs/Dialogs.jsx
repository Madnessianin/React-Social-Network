import React from 'react';
import style from './Dialogs.module.css';
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
    let dialogsElements = props.dialogs.map( dialog => <div key = {dialog.id}><DialogItem name={dialog.name} id={dialog.id} /></div>),
        messagesElements = props.messages.map( message => <div key = {message.id}><Messege message={message.message}/></div> ),
        addMessage = (data) => {
            props.sendMessage(data.newMessageText);
        }
    
    return (
    <div className={style.dialogs}>
        <div className = {style.inner}>
            <div className={style.items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <SendNewMessageRedux onSubmit={addMessage} />
            </div>

        </div>
    </div>
    ) 
}

export default Dialogs;