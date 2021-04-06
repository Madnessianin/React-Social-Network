import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../Redux/profile-reducer";
import {
  getAutorizedUserId,
  getProfilePhoto,
} from "../../../Redux/profile-selectors";
import style from "./NewPost.module.scss";
import PhotoLogin from "../../Common/PhotoLogin/PhotoLogin";
import {
  PlayCircleOutlined,
  CameraOutlined,
  FileTextOutlined,
  SoundOutlined,
} from "@ant-design/icons";

const NewPost = () => {
  const dispatch = useDispatch();
  const [newPostMode, setNewPostMode] = useState(false);

  const onSubmit = ({ newPostText }) => {
    dispatch(addPost(newPostText));
  };

  const setAddPostMode = () => {
    setNewPostMode(!newPostMode);
  };

  return (
    <div className={style.inner}>
      <div className={style.photoBtn}>
        <LocalPhotoLogin />
      </div>
      <div className={style.content}>
        {newPostMode ? (
          <PostForm onSubmit={onSubmit} />
        ) : (
          <PreviewBlock setAddPostMode={setAddPostMode} />
        )}
      </div>
    </div>
  );
};

const PostForm = ({ onSubmit }) => {
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
          Добавить
        </Button>
      </div>
    </Form>
  );
};

const LocalPhotoLogin = () => {
  const profilePhoto = useSelector((state) => getProfilePhoto(state));
  const authUserId = useSelector((state) => getAutorizedUserId(state));

  return (
    <PhotoLogin photo={profilePhoto} link={`/app/profile/${authUserId}`} />
  );
};

const AdditionalBtns = () => {
  return (
    <div className={style.additionalBtns}>
      <Button
        shape="circle"
        className={style.additionalBtn}
        icon={<SoundOutlined />}
      />
      <Button
        shape="circle"
        className={style.additionalBtn}
        icon={<CameraOutlined />}
      />
      <Button
        shape="circle"
        className={style.additionalBtn}
        icon={<PlayCircleOutlined />}
      />
      <Button
        shape="circle"
        className={style.additionalBtn}
        icon={<FileTextOutlined />}
      />
    </div>
  );
};

const PreviewBlock = ({ setAddPostMode }) => {
  return (
    <div className={style.previewBlock}>
      <Button type="text" className={style.visibleBtn} onClick={setAddPostMode}>
        Что у вас нового?
      </Button>
      <AdditionalBtns />
    </div>
  );
};

export default NewPost;
