import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../Redux/profile-reducer";
import style from "./NewPost.module.scss";

const NewPost = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    //dispatch(addPost(data));
  };

  return (
    <div className={style.wrapper}>
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
          <Input className={style.formInput} />
        </Form.Item>
        <Form.Item>
          <Button className={style.formBtn} htmlType="submit" type="primary">
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewPost;
