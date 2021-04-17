import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfileInfo } from "../../../../Redux/profile/profile-reducer";
import {
  getGeneralData,
  getProfile,
} from "../../../../Redux/profile/profile-selectors";
import editForm from "../EditForm";
import style from "./../EditForm.module.scss";

export const GeneralForm = ({ onSubmit, data, textBtn, isAddBtn, action }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <Form
      className={style.form}
      onFinish={onSubmit}
      name="general"
      initialValues={data}
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
        <Input.TextArea autoSize={{ minRows: 1, maxRows: 3 }} />
      </Form.Item>
      <div className={style.btnInner}>
        {isAddBtn ? (
          <Button className={style.formBtn} onClick={action}>
            {"Назад"}
          </Button>
        ) : null}
        <Button className={style.formBtn} htmlType="submit" type="primary">
          {textBtn || "Сохранить изменения"}
        </Button>
      </div>
    </Form>
  );
};

const GeneralSettings = editForm(({ title }) => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(saveProfileInfo(data));
  };
  const general = useSelector((state) => getGeneralData(state));
  return <GeneralForm title={title} onSubmit={onSubmit} data={general} />;
});

export default GeneralSettings;
