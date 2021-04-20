import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { SendOutlined, PaperClipOutlined } from "@ant-design/icons";
import style from "./NewMessage.module.scss";

const NewMessage = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {};
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
