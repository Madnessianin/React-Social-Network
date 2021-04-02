import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo192.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/auth-reducer";
import { Header } from "antd/lib/layout/layout";
import { getLogin } from "../../Redux/auth-selectors";
import { Menu } from "antd";
import {
  MenuUnfoldOutlined,
  SettingOutlined,
  ToolOutlined,
  ExportOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const MyHeader = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Header className="header">
      <div className="header_inner">
        <img className="header_logo" src={logo} />
        <DropDownMenu event={logOut} />
      </div>
    </Header>
  );
};

const DropDownMenu = ({ event }) => {
  const login = useSelector((state) => getLogin(state));
  return (
    <Menu
      mode="horizontal"
      className="dropdown_menu"
      style={{ width: "200px" }}
    >
      <SubMenu
        key="menu"
        icon={<MenuUnfoldOutlined className="dropdown_menu_icon" />}
        title={login}
      >
        <Menu.Item icon={<SettingOutlined />} key="1">
          Общие настройки
        </Menu.Item>
        <Menu.Item icon={<ToolOutlined />} key="2">
          Настройки отображения
        </Menu.Item>
        <Menu.Item onClick={event} icon={<ExportOutlined />} key="3">
          Выйти
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MyHeader;
