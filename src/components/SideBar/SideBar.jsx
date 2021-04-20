import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const SideBar = () => {
  const url = useLocation().pathname.slice(5);
  const [urlKey, setUrlKey] = useState(url);
  useEffect(() => {
    setUrlKey(url);
  }, [url]);
  return (
    <Sider style={{ width: "200px", height: "100%" }}>
      <Menu
        mode="inline"
        selectedKeys={[urlKey]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="profile">
          <Link to="/app/profile">Моя страница</Link>
        </Menu.Item>
        <Menu.Item key="dialogs">
          <Link to="/app/dialogs">Мои сообщения</Link>
        </Menu.Item>
        <Menu.Item key="news">
          <Link to="/app/news">Новости</Link>
        </Menu.Item>
        <Menu.Item key="music">
          <Link to="/app/music">Музыка</Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to="/app/users">Пользователи</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
