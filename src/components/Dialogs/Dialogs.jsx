import React from "react";
import style from "./Dialogs.module.scss";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../Utils/Validators/validators";
import { useDispatch, useSelector } from "react-redux";
import { getDialogs, getMessages } from "../../Redux/dialogs-selectors";
import { sendMessage } from "../../Redux/dialogs-reducer";
import { Link, NavLink } from "react-router-dom";
import { Avatar, List } from "antd";
import PhotoLogin from "../Common/PhotoLogin/PhotoLogin";
import { getProfilePhoto } from "../../Redux/profile-selectors";

const maxLength50 = maxLengthCreator(50);
const SendNewMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newMessageText"}
          placeholder={"Enter new message"}
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const SendNewMessageRedux = reduxForm({ form: "addMessage" })(SendNewMessage);

const Dialogs = () => {
  const dialogs = useSelector((state) => getDialogs(state));
  const messages = useSelector((state) => getMessages(state));

  const dispatch = useDispatch();

  const messagesElements = messages.map((message) => (
    <Messege key={message.id} message={message.message} />
  ));

  const addMessage = (data) => {
    dispatch(sendMessage(data.newMessageText));
  };

  return (
    <div className={style.inner}>
      <List
        dataSource={dialogs}
        className={style.list}
        renderItem={(item) => (
          <Dialog
            id={item.id}
            name={item.fullName}
            lastMessege={item.lastMessege}
          />
        )}
      />
    </div>
  );
};

const Dialog = ({ id, name, lastMessege: { user } }) => {
  const linkUrl = `/app/dialogs/${id}`;
  return (
    <Link to={linkUrl}>
      <List.Item className={style.listItem}>
        <List.Item.Meta
          avatar={<PhotoLogin isLink={false} isLarge={true} />}
          title={<span className={style.dialogName}>{name}</span>}
          description={<MessageAvatar message={user.message} />}
        ></List.Item.Meta>
        <span className={style.data}>{user.data}</span>
      </List.Item>
    </Link>
  );
};

const MessageAvatar = ({ message }) => {
  return (
    <span className={style.lastMessege}>
      <PhotoLogin isLink={false} />
      <span className={style.message}>{message}</span>
    </span>
  );
};

const Messege = (props) => {
  return <div className={style.messages_item}>{props.message}</div>;
};

export default Dialogs;
