import React, { useEffect, useState } from "react";
import style from "./Users.module.scss";
import Preloader from "../Common/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  getCurrentPage,
  getFollowingIsProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from "../../Redux/users/users-selectors";
import { Link } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow,
} from "../../Redux/users/users-reducer";
import { Avatar, Button, List, Pagination } from "antd";
import isOwnerPage from "../Common/Hoc/isOwner";
import ModalWindow from "../Common/ModalWindow/ModalWindow";
import PostForm from "../Common/PostForm/PostForm";
import { getAutorizedUserId } from "../../Redux/auth/auth-selectors";
import { sendNewMessage } from "../../Redux/chats/chats-reducer";

const Users = () => {
  const totalCount = useSelector((state) => getTotalUsersCount(state));
  const pageSize = useSelector((state) => getPageSize(state));
  const currentPage = useSelector((state) => getCurrentPage(state));
  const isFetching = useSelector((state) => getIsFetching(state));
  const users = useSelector((state) => getAllUsers(state));
  const dispatch = useDispatch();

  const [current, setCurrent] = useState(currentPage);

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize));
  }, [pageSize, currentPage]);

  const [arrayUsers, setArrayUsers] = useState(users);
  useEffect(() => {
    setArrayUsers(users);
  }, [users]);

  const onPageChanged = (page) => {
    setCurrent(page);
    dispatch(setCurrentPage(page));
    dispatch(getUsers(page, pageSize));
  };
  return (
    <div className={style.users}>
      <div className={style.pagination}>
        <Pagination
          total={totalCount}
          defaultCurrent={1}
          pageSize={pageSize}
          current={current}
          onChange={onPageChanged}
        />
      </div>
      {isFetching ? <Preloader /> : null}
      <List
        dataSource={arrayUsers}
        className={style.inner}
        renderItem={(user) => <User key={user.id} user={user} id={user.id} />}
      />
      <div className={style.pagination}>
        <Pagination
          total={totalCount}
          defaultCurrent={1}
          pageSize={pageSize}
          current={current}
          onChange={onPageChanged}
        />
      </div>
    </div>
  );
};

const generatorTextBtn = (isOwner, followed) =>
  !isOwner ? `${followed ? "Вы подписанны" : "Добавить в друзья"}` : null;

const User = isOwnerPage(({ user, isOwner }) => {
  const followed = useSelector((state) => getFollowingIsProgress(state));
  const [followProgress, setFollowProgress] = useState(followed[0]);
  useEffect(() => {
    setFollowProgress(followed[0]);
  }, [followed]);

  const dispatch = useDispatch();
  const followUser = () => {
    dispatch(follow(user.id));
  };
  const unfollowUser = (userId) => {
    dispatch(unfollow(userId));
  };

  const [visibleModal, setVisibleModal] = useState(false);

  const openMessageForm = () => {
    setVisibleModal(true);
  };

  const closeMessageForm = () => {
    setVisibleModal(false)
  }

  const authId = useSelector(state => getAutorizedUserId(state));

  const sendMessage = (data) => {
    dispatch(sendNewMessage(data.newPostText, authId, user.id))
    closeMessageForm()
  };

  return (
    <List.Item
      className={style.item}
      actions={[
        <div className={style.actionBtns}>
          <Button
            onClick={followUser}
            className={style.actionBtn}
            disabled={followProgress}
          >
            {generatorTextBtn(isOwner, user.followed)}
          </Button>
          <Button className={style.actionBtn} onClick={openMessageForm}>
            {!isOwner ? "Написать сообщение" : null}
          </Button>
        </div>,
      ]}
    >
      <Link to={`/app/profile/${user.id}`}>
        <List.Item.Meta
          avatar={<Avatar src={user.photos.large || userPhoto} size={100} />}
          title={user.name}
          description={user.status}
        />
      </Link>
      <ModalWindow title="Написать сообщение: " visible={visibleModal} onCancel={closeMessageForm}>
        <PostForm textBtn="Отправить" onSubmit={sendMessage} />
      </ModalWindow>
    </List.Item>
  );
});

export default Users;
