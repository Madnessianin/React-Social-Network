import React, { useEffect } from "react";
import { Row, Col } from "antd";
import Preloader from "../Common/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
} from "../../Redux/profile/profile-selectors";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Avatar from "./Avatar/Avatar";
import Contacts from "./Contacts/Contacts";
import { useParams } from "react-router";
import { getUser } from "../../Redux/profile/profile-reducer";
import FriendsList from "./FriendsList/FriendsList";
import MyPosts from "./MyPosts/MyPosts";
import NewPost from "../Common/NewPost/NewPost";
import { getAutorizedUserId } from "../../Redux/auth/auth-selectors";
import isOwnerPage from "../Common/Hoc/isOwner";

const Profile = isOwnerPage(({isOwner}) => {
  const profile = useSelector((state) => getProfile(state));
  const dispatch = useDispatch();
  let userId = useParams().userId;
  const autorizedUserId = useSelector((state) =>
    getAutorizedUserId(state)
  ).toString();

  const updateDataUser = () => {
    if (!userId) {
      userId = autorizedUserId;
    }
    dispatch(getUser(userId));
  };
  useEffect(() => {
    if (userId !== autorizedUserId) {
      updateDataUser();
    }
    updateDataUser();
  }, [userId]);

  if (!profile) {
    return <Preloader />;
  }
  
  return (
    <Row>
      <Col flex="20%">
        <Avatar isOwner={isOwner} />
        <Contacts />
        <FriendsList isOwner={isOwner} />
      </Col>
      <Col flex="auto" style={{ marginLeft: "15px" }}>
        <ProfileInfo isOwner={isOwner} />
        <NewPost />
        <MyPosts />
      </Col>
    </Row>
  );
});

export default Profile;
