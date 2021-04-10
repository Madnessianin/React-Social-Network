import { Button, Form, Input } from "antd";
import React, { useReducer } from "react";
import authorization from "../Authtorization";
import style from "./Registration.module.scss";
import regReducer, {
  setDataContactForm,
  setDataGeneralForm,
  setDataLoginForm,
  setVisibleMode,
} from "./RegReducer";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { GeneralForm } from "../../Edit/EditForms/GeneralSettings/GeneralSettings";
import { ContactsForm } from "../../Edit/EditForms/ContactsSettings/ContactsSettings";
import { useDispatch } from "react-redux";
import { registration } from "../../../Redux/auth/auth-reducer";
const initState = {
  dataForm: {
    loginForm: null,
    photo: null,
    generalForm: null,
    contactsForm: null,
  },
  login: true,
  general: false,
  contacts: false,
  photo: false,
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Registration = () => {
  const [stateReg, dispatchReg] = useReducer(regReducer, initState);
  const dispatch = useDispatch()

  const saveLogin = (data) => {
    dispatchReg(setDataLoginForm(data));
    dispatchReg(setVisibleMode("general"));
  };
  const saveGeneral = (data) => {
    dispatchReg(setDataGeneralForm(data));
    dispatchReg(setVisibleMode('contacts'));
  };
  const saveContacts = (data) => {
    dispatchReg(setDataContactForm(data));
    dispatch(registration(stateReg.dataForm))
  }
  return (
    <div className={style.inner}>
      {stateReg.login ? <CreateAuthData onSubmit={saveLogin} /> : null}
      {stateReg.general ? <GeneralForm onSubmit={saveGeneral} /> : null}
      {stateReg.contacts ? <ContactsForm onSubmit={saveContacts} /> : null}
    </div>
  );
};

const CreateAuthData = ({ onSubmit }) => {
  return (
    <Form
      name="createLogin"
      {...layout}
      className={style.form}
      initialValues={{ rememberMe: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="login"
        label="Логин:"
        rules={[{ required: true, message: "Пожалуйста, введите свое имя!" }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Имя пользователя"
          className={style.input}
        />
      </Form.Item>
      <Form.Item
        name="email"
        label="Почта:"
        rules={[{ required: true, message: "Пожалуйста, введите свое имя!" }]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="Имя пользователя"
          className={style.input}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Пароль: "
        rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="password"
          className={style.input}
        />
      </Form.Item>
      <Form.Item
        name="passwordClone"
        label="Повторите пароль: "
        dependencies={["password"]}
        rules={[
          { required: true, message: "Пожалуйста, введите пароль!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароли не совпадают!"));
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="password"
          className={style.input}
        />
      </Form.Item>
      <div className={style.formBtns}>
        <Button type="primary" htmlType="submit" className={style.formBtnsItem}>
          Сохранить
        </Button>
      </div>
    </Form>
  );
};



export default authorization(Registration);
