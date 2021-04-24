import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendOutlined, PaperClipOutlined } from "@ant-design/icons";
import style from "./NewMessage.module.scss";
import { sendMessage } from "./../../../Redux/chats/chats-reducer";
import { getAutorizedUserId } from "../../../Redux/auth/auth-selectors";

const NewMessage = ({ chatId }) => {
  const dispatch = useDispatch();
  const authUserId = useSelector((state) => getAutorizedUserId(state));
  const onSubmit = (data) => {
    dispatch(sendMessage(data.newMessage, authUserId, chatId));
  };
  return (
    <div className={style.inner}>
      <Button
        className={style.btn}
        icon={<PaperClipOutlined className={style.icon} />}
      />
      <MessageForm onSubmit={onSubmit} />
    </div>
  );
};

const MessageForm = ({ onSubmit }) => {
  return (
    <Form className={style.form} onFinish={onSubmit}>
      <Form.Item
        name="newMessage"
        rules={[{ required: true, message: "Пожалуйста, введите что-нибудь!" }]}
      >
        <Input className={style.input} placeholder="Напишите что-нибудь..." />
      </Form.Item>
      <div className={style.formBtns}>
        <Button
          className={style.btn}
          htmlType="submit"
          icon={<SendOutlined className={style.icon} />}
        />
      </div>
    </Form>
  );
};

export default NewMessage;
