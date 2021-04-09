import React, { useEffect, useState } from "react";
import style from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { login, setCaptchaText } from "../../../Redux/auth/auth-reducer";
import { getCaptcha } from "../../../Redux/auth/auth-selectors";
import { Form, Input, Button, Checkbox, Modal, Image } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Authorization from "../Authtorization";

const LoginForm = () => {
  const [visibleMode, setVisibleMode] = useState(false);
  const dispatch = useDispatch();
  const captchaURL = useSelector((state) => getCaptcha(state));

  const onSubmit = (data) => {
    dispatch(login(data));
  };

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


export default Authorization(LoginForm);
