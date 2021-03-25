import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider style={{ width: "200px", height: "100%" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/app/profile">Моя страница</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/app/dialogs">Мои сообщения</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/app/news">Новости</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/app/music">Музыка</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/app/users">Пользователи</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
