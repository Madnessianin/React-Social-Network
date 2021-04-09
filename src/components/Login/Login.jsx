import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import style from "./Login.module.scss";
import logo from "../../assets/images/logo192.png";
import { useDispatch, useSelector } from "react-redux";
import { login, setCaptchaText } from "../../Redux/auth/auth-reducer";
import { getCaptcha, getIsAuth } from "../../Redux/auth/auth-selectors";
import { Form, Input, Button, Checkbox, Modal, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = ({ onSubmit, captchaURL, error }) => {
  const [visibleMode, setVisibleMode] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (captchaURL) {
      setVisibleMode(true);
    }
  }, [captchaURL]);

  const setCaptcha = (data) => {
    dispatch(setCaptchaText(data.captchaText));
    setVisibleMode(false);
  };

  return (
    <Form
      name="login"
      className={style.form}
      initialValues={{ rememberMe: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Пожалуйста, введите свое имя!" }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Имя пользователя"
          className={style.input}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="password"
          className={style.input}
        />
      </Form.Item>
      <div className={style.checkboxBlock}>
        <Form.Item name="rememberMe" valuePropName="checked" noStyle>
          <Checkbox className={style.checkbox}>Запомнить меня</Checkbox>
        </Form.Item>
        <Button type="link" className={style.btnLink}>
          Забыли пароль?
        </Button>
      </div>

      <div className={style.formBtns}>
        <Button type="primary" htmlType="submit" className={style.formBtnsItem}>
          Войти
        </Button>
        <Button className={style.formBtnsItem}>Зарегистрироваться</Button>
      </div>
      <ModalForm
        visible={visibleMode}
        captchaURL={captchaURL}
        setCaptcha={setCaptcha}
      />
    </Form>
  );
};

const ModalForm = ({ visible, setCaptcha, captchaURL }) => {
  const [isVisible, setIsVisible] = useState(visible);
  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <Modal
      title="Введите текст с картинки, для подтверждения, что вы не робот! "
      visible={isVisible}
      centered
      footer={null}
    >
      <Form name="captcha" onFinish={setCaptcha}>
        <div className={style.captchaImg}>
          <Image src={captchaURL} width={300} />
        </div>
        <Form.Item
          name="captchaText"
          rules={[
            { required: true, message: "Подтвердите, что вы не робот:)" },
          ]}
        >
          <Input placeholder="Текст с картинки" className={style.input} />
        </Form.Item>
        <div className={style.modalBtns}>
          <Button
            type="primary"
            htmlType="submit"
            className={style.formBtnsItem}
          >
            Отправить
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

const Login = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => getIsAuth(state));
  const captchaURL = useSelector((state) => getCaptcha(state));

  const onSubmit = (data) => {
    console.log(data);
    dispatch(login(data));
  };

  if (isAuth) {
    return <Redirect to={"app/profile"} />;
  }

  return (
    <div className={style.inner}>
      <div className={style.logo}>
        <img className={style.logoImg} src={logo} />
      </div>
      <div className={style.content}>
        <h3 className={style.title}>Социальная сеть</h3>
        <LoginForm onSubmit={onSubmit} captchaURL={captchaURL} />
      </div>
    </div>
  );
};
export default Login;
