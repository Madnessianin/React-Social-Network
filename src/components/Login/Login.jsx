import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import style from "./Login.scss";
import logo from "../../assets/images/logo192.png";
import classes from "../Common/FormsControl/FormsControl.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { getCaptcha, getIsAuth } from "../../Redux/auth-selectors";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  styleBtn,
  styleBtnLink,
  styleCheckBox,
  styleInput,
} from "./LoginStyle";

const LoginForm = ({ onSubmit, captchaURL, error }) => {
  return (
    <Form
      name="login"
      className="login_form_inner"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          style={styleInput}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="password"
          style={styleInput}
        />
      </Form.Item>
      <Form.Item>
        <div className="rememberMe">
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <Checkbox style={styleCheckBox}>Запомнить меня</Checkbox>
          </Form.Item>

          <Button type="link" style={styleBtnLink}>
            Забыли пароль?
          </Button>
        </div>
      </Form.Item>

      <Form.Item>
        <div className="login_btn">
          <Button type="primary" htmlType="submit" style={styleBtn}>
            Войти
          </Button>
          <Button style={styleBtn}>Зарегистрироваться</Button>
        </div>
      </Form.Item>
      {captchaURL && (
        <Form.Item
          name="captcha"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <img className={style.captcha} src={captchaURL} />
          <Input placeholder="captcha" style={styleInput} />
        </Form.Item>
      )}
      {error && <div className={classes.formCommonError}>{error}</div>}
    </Form>
  );
};

//const LoginFormConteiner = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => getIsAuth(state));
  const captchaURL = useSelector((state) => getCaptcha(state));

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  if (isAuth) {
    return <Redirect to={"app/profile"} />;
  }

  return (
    <div className="login_form">
      <img className="login_logo" src={logo} />
      <div className="login_wrapper">
        <h3 className="login_title">Социальная сеть</h3>
        <LoginForm onSubmit={onSubmit} captchaURL={captchaURL} />
      </div>
    </div>
  );
};
export default Login;
