import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../../../Redux/profile/profile-selectors";
import style from "./../EditForm.module.scss";
import editForm from "../EditForm";
import { saveProfileInfo } from "../../../../Redux/profile/profile-reducer";
import { Button, Form, Input } from "antd";

export const ContactsForm = ({
  onSubmit,
  contacts,
  textBtn,
  isAddBtn,
  action,
}) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const contactsKey = {
    youtube: null,
    facebook: null,
    vk: null,
    github: null,
    twitter: null,
  };

  const arrayContacts = Object.keys(contactsKey).map((item) => (
    <Form.Item
      key={item}
      name={item}
      label={item}
      rules={[
        {
          required: true,
          message: `Пожалуйста, введите адрес ${item}!`,
        },
      ]}
    >
      <Input />
    </Form.Item>
  ));

  return (
    <Form
      className={style.form}
      onFinish={onSubmit}
      name="contacts"
      initialValues={contacts}
      {...layout}
    >
      {arrayContacts}
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

const ContactsSettings = editForm(({ title }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => getContacts(state));
  const onSubmit = (data) => {
    dispatch(saveProfileInfo(data));
  };

  return <ContactsForm title={title} onSubmit={onSubmit} contacts={contacts} />;
});

export default ContactsSettings;
