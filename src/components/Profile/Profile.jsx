import React, { useEffect } from "react";
import { Row, Col } from "antd";
import Preloader from "../Common/Preloader/Preloader";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import { useDispatch, useSelector } from "react-redux";
import { getAutorizedUserId, getProfile } from "../../Redux/profile-selectors";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Avatar from "./Avatar/Avatar";
import Contacts from "./Contacts/Contacts";
import { useParams } from "react-router";
import { getStatus, getUser } from "../../Redux/profile-reducer";

const Profile = () => {
  const profile = useSelector((state) => getProfile(state));
  const dispatch = useDispatch();
  let userId = useParams().userId;
  const autorizedUserId = useSelector((state) =>
    getAutorizedUserId(state)
  ).toString();
  let isOwner = !userId || userId === autorizedUserId;

  const updateDataUser = () => {
    if (!userId) {
      userId = autorizedUserId;
    }
    dispatch(getUser(userId));
    dispatch(getStatus(userId));
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
      <Col flex="280px">
        <Avatar isOwner={isOwner} />
        <Contacts />
      </Col>
      <Col flex="auto" style={{ marginLeft: "15px" }}>
        <ProfileInfo isOwner={isOwner} />
        {/* <MyPostsConteiner /> */}
      </Col>
    </Row>
  );
};

export default Profile;
