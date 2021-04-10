import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfileInfo } from "../../../../Redux/profile/profile-reducer";
import { getProfile } from "../../../../Redux/profile/profile-selectors";
import editForm from "../EditForm";
import style from "./../EditForm.module.scss";

const GeneralForm = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const dispatch = useDispatch();
  const profile = useSelector((state) => getProfile(state));
  const onSubmit = (data) => {
    dispatch(saveProfileInfo(data));
  };
  return (
    <Form
      className={style.form}
      onFinish={onSubmit}
      name="general"
      initialValues={profile}
      {...layout}
    >
      <Form.Item
        name="fullName"
        label="Имя пользователя: "
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите новое имя!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="aboutMe"
        label="Информация о себе: "
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите информацию о себе!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="lookingForAJob" label="Статус: ">
        <Select>
          <Select.Option value={true}>Ищу работу</Select.Option>
          <Select.Option value={false}>Не ищу работу</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="lookingForAJobDescription"
        label="Технологический стек: "
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите информацию о себе!",
          },
        ]}
      >
        <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
      </Form.Item>
      <div className={style.btnInner}>
        <Button className={style.formBtn} htmlType="submit" type="primary">
          Сохранить изменения
        </Button>
      </div>
    </Form>
  );
};

const GeneralSettings = editForm(({ title }) => <GeneralForm title={title} />);

export default GeneralSettings;
