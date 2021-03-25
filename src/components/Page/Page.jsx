import React from "react";
import { Layout, Menu } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import News from "./../News/News";
import Music from "./../Music/Music";
import Settings from "./../Settings/Settings";
import UsersConteiner from "./../Users/UsersConteiner";
import withSuspense from "./../Hoc/withSuspense";
import EditConteiner from "./../Edit/EditConteiner";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import Header from "../Header/Header";
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const DialogsConteiner = React.lazy(() =>
  import("./../Dialogs/DialogsConteiner")
);
const ProfileConteiner = React.lazy(() =>
  import("./../Profile/ProfileConteiner")
);

const Page = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout style={{padding: '0 200px'}}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">profile</Menu.Item>
            <Menu.Item key="2">dialogs</Menu.Item>
            <Menu.Item key="3">news</Menu.Item>
            <Menu.Item key="4">music</Menu.Item>
            <Menu.Item key="5">users</Menu.Item>
            <Menu.Item key="6">settings</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content>
            <Switch>
              <Route
                exact
                path="/app"
                render={() => <Redirect to={"/app/profile"} />}
              />
              <Route
                path="/app/profile/:userId?"
                render={withSuspense(ProfileConteiner)}
              />
              <Route
                path="/app/dialogs"
                render={withSuspense(DialogsConteiner)}
              />
              <Route path="/app/news" component={News} />
              <Route path="/app/music" component={Music} />
              <Route path="/app/users" render={withSuspense(UsersConteiner)} />
              <Route path="/app/settings" component={Settings} />
              <Route path="/app/edit" render={() => <EditConteiner />} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
/**/
export default withAuthRedirect(Page);
