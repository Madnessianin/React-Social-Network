import React from "react";
import { Row, Col } from "antd";
import Preloader from "../Common/Preloader/Preloader";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import { useSelector } from "react-redux";
import { getProfile } from "../../Redux/profile-selectors";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Avatar from "./Avatar/Avatar";
import Contacts from "./Contacts/Contacts";

const Profile = (props) => {
  const profile = useSelector((state) => getProfile(state));

  if (!profile) {
    return <Preloader />;
  }
  return (
    <Row>
      <Col flex="280px">
        <Avatar isOwner={props.isOwner} />
        <Contacts />
      </Col>
      <Col flex="auto" style={{ marginLeft: "15px" }}>
        <ProfileInfo isOwner={props.isOwner} />
        {/* <MyPostsConteiner /> */}
      </Col>
    </Row>
  );
};

export default Profile;
