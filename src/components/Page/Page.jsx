import React from "react";
import { Layout } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import News from "./../News/News";
import Music from "./../Music/Music";
import Settings from "./../Settings/Settings";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Edit from "../Edit/Edit";
import withAuthRedirect from "../Common/Hoc/withAuthRedirect";
import withSuspense from "../Common/Hoc/withSuspense";
import io from "socket.io-client";

const { Content, Footer } = Layout;
const Chats = React.lazy(() => import("../Chats/Chats"));
const Profile = React.lazy(() => import("../Profile/Profile"));
import Users from "../Users/Users";

const Page = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout style={{ padding: "15px 7%" }}>
        <SideBar />
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
                render={withSuspense(Profile)}
              />
              <Route path="/app/dialogs" render={withSuspense(Chats)} />
              <Route path="/app/news" component={News} />
              <Route path="/app/music" component={Music} />
              <Route path="/app/users" render={() => <Users />} />
              <Route path="/app/settings" component={Settings} />
              <Route path="/app/edit" render={() => <Edit />} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Social network. Created Alex
      </Footer>
    </Layout>
  );
};
/**/
export default withAuthRedirect(Page);
