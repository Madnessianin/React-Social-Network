import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAutorizedUserId } from "../../../Redux/auth/auth-selectors";
import { sendNewMessage } from "../../../Redux/chats/chats-reducer";
import ModalWindow from "../ModalWindow/ModalWindow";
import PostForm from "../PostForm/PostForm";

const SendMessage = ({ userId, className }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const openMessageForm = () => {
    setVisibleModal(true);
  };

  const closeMessageForm = () => {
    setVisibleModal(false);
  };
  const authId = useSelector((state) => getAutorizedUserId(state));
  const dispatch = useDispatch();

  const sendMessage = (data) => {
    dispatch(sendNewMessage(data.newPostText, authId, userId));
    closeMessageForm();
  };

  return (
    <Button onClick={openMessageForm} className={className}>
      Написать сообщение
      <ModalWindow
        title="Написать сообщение: "
        visible={visibleModal}
        onCancel={closeMessageForm}
      >
        <PostForm textBtn="Отправить" onSubmit={sendMessage} />
      </ModalWindow>
    </Button>
  );
};

export default SendMessage;
