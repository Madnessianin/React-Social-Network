import { Button, Form, Input, List } from "antd";
import React, { useState } from "react";
import AdditionalBtns from "../AdditionalBtns/AdditionalBtns";
import PhotoAvatar from "../PhotoAvatar/PhotoAvatar";
import style from "./PostForm.module.scss";

const PostForm = ({ onSubmit, photo, textBtn, name }) => {
  const [value, setValue] = useState("Что нового? ");

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <Form className={style.form} onFinish={onSubmit} name="newPost">
      <Form.Item
        name="newPostText"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите текст поста перед отправкой!",
          },
        ]}
      >
        <Input.TextArea
          onChange={onChange}
          value={value}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>
      <div className={style.formBtnInner}>
        <AdditionalBtns />
        <Button className={style.formBtn} htmlType="submit" type="primary">
          {textBtn}
        </Button>
      </div>
    </Form>
  );
};

export default PostForm;
