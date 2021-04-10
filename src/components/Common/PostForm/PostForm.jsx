import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import AdditionalBtns from "../AdditionalBtns/AdditionalBtns";
import PhotoLogin from "../PhotoLogin/PhotoLogin";
import style from "./PostForm.module.scss";

const PostForm = ({ onSubmit, photo, name, userId, textBtn }) => {
  const [value, setValue] = useState("Что нового? ");

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <div className={style.inner}>
      <PhotoLogin photo={photo} name={name} link={`/app/profile/${userId}`} />
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
    </div>
  );
};

export default PostForm;
