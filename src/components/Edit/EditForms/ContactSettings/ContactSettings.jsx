import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../../../Redux/profile/profile-selectors";
import style from "./../EditForm.module.scss";
import EditForm from "../EditForm";
import { saveProfileInfo } from "../../../../Redux/profile/profile-reducer";
import { Button, Form, Input } from "antd";

const ContactForm = (props) => {
  const contacts = useSelector((state) => getContacts(state));
  const dispatch = useDispatch();
  const keysContacts = Object.keys(contacts);
  const onSubmit = (data) => {
    dispatch(saveProfileInfo(data));
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const arrayContacts = Object.keys(contacts).map((item) => (
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
        <Button className={style.formBtn} htmlType="submit" type="primary">
          Сохранить изменения
        </Button>
      </div>
    </Form>
  );
};

const ContactSettings = EditForm(({ title }) => <ContactForm title={title} />);

export default ContactSettings;
