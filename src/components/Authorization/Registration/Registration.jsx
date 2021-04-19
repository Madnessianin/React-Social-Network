import { Button, Form, Input, Result } from "antd";
import React, { useEffect, useReducer, useState } from "react";
import authorization from "../Authtorization";
import style from "./Registration.module.scss";
import regReducer, {
  setDataContactsForm,
  setDataGeneralForm,
  setDataLoginForm,
  setSubtitle,
  setVisibleMode,
} from "./RegReducer";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { GeneralForm } from "../../Edit/EditForms/GeneralSettings/GeneralSettings";
import { ContactsForm } from "../../Edit/EditForms/ContactsSettings/ContactsSettings";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../../Redux/auth/auth-reducer";
import logo from "./../../../assets/images/logo192.png";
import { Link } from "react-router-dom";

const initState = {
  dataForm: {
    loginForm: null,
    photos: null,
    generalForm: null,
    contactsForm: null,
  },
  subtitle: "Данные учетной записи:",
  login: true,
  general: false,
  contacts: false,
  photos: false,
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Registration = () => {
  const [stateReg, dispatchReg] = useReducer(regReducer, initState);
  const dispatch = useDispatch();
  const [visibleSuccses, seVisibleSuccses] = useState(false);

  useEffect(() => {
    const {
      dataForm: { loginForm, generalForm, contactsForm },
    } = stateReg;
    if (loginForm !== null && generalForm !== null && contactsForm !== null) {
      dispatch(registration(stateReg.dataForm));
    }
  }, [stateReg]);

  const saveLogin = (data) => {
    dispatchReg(setDataLoginForm(data));
    dispatchReg(setVisibleMode("login", false));
    setGeneral();
  };
  const saveGeneral = (data) => {
    dispatchReg(setDataGeneralForm(data));
    dispatchReg(setVisibleMode("general", false));
    setContacts();
  };
  const saveContacts = (data) => {
    dispatchReg(setDataContactsForm(data));
    dispatchReg(setVisibleMode("contacts", false));
    seVisibleSuccses(true);
  };

  const setLogin = () => {
    dispatchReg(setSubtitle("Данные учетной записи:"));
    dispatchReg(setVisibleMode("login", true));
    dispatchReg(setVisibleMode("general", false));
  };
  const setGeneral = () => {
    dispatchReg(setSubtitle("Основная информация:"));
    dispatchReg(setVisibleMode("general", true));
    dispatchReg(setVisibleMode("contacts", false));
  };
  const setContacts = () => {
    dispatchReg(setSubtitle("Мои контакты:"));
    dispatchReg(setVisibleMode("contacts", true));
  };

  const { loginForm, generalForm, contactsForm } = stateReg.dataForm;

  return (
    <div className={style.inner}>
      <div className={style.header}>
        <div className={style.title}>
          <img src={logo} className={style.titleLogo} />
          <h1 className={style.titleText}>
            Создайте аккаунт в нашей социальной сети
          </h1>
        </div>
        <h4 className={style.subtitle}>{stateReg.subtitle}</h4>
      </div>
      <div className={style.forms}>
        {stateReg.login ? (
          <CreateAuthData onSubmit={saveLogin} data={loginForm} />
        ) : null}
        {stateReg.general ? (
          <GeneralForm
            onSubmit={saveGeneral}
            data={generalForm}
            textBtn="Далее"
            isAddBtn={true}
            action={setLogin}
          />
        ) : null}
        {stateReg.contacts ? (
          <ContactsForm
            onSubmit={saveContacts}
            contacts={contactsForm}
            textBtn="Далее"
            isAddBtn={true}
            action={setGeneral}
          />
        ) : null}
        {visibleSuccses ? <Succsess /> : null}
      </div>
    </div>
  );
};

const Succsess = () => {
  return (
    <Result
      status="success"
      title="Регистрация прошла успешно!"
      extra={[
        <Button type="primary" key="console">
          <Link to="/login">Авторизироваться</Link>
        </Button>,
      ]}
    />
  );
};

const CreateAuthData = ({ onSubmit, data }) => {
  return (
    <Form
      name="createLogin"
      {...layout}
      className={style.form}
      initialValues={data}
      onFinish={onSubmit}
    >
      <Form.Item
        name="login"
        label="Логин:"
        rules={[{ required: true, message: "Пожалуйста, введите свое имя!" }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Логин пользователя"
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
          placeholder="Почта: "
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
          placeholder="Пароль: "
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
          placeholder="Подтверждение пароля: "
          className={style.input}
        />
      </Form.Item>

      <div className={style.formBtns}>
        <Button className={style.formBtnsItem} disabled>
          Назад
        </Button>
        <Button type="primary" htmlType="submit" className={style.formBtnsItem}>
          Далее
        </Button>
      </div>
    </Form>
  );
};

export default authorization(Registration);
