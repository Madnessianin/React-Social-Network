import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
//import style from "../../SideBar/NavBar.module.css";
import style from "./AddSideBar.module.scss";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const AddSideBar = () => {
  return (
    <Sider style={{ width: "200px", height: "100%" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/app/edit/general">Основное</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/app/edit/contacts">Контакты</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AddSideBar;
