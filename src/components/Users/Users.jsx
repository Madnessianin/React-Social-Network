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
import SendMessage from "../Common/SendMessage/SendMessage";
import FollowBtn from "../Common/FollowBtn/FollowBtn";

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

const User = isOwnerPage(({ user, isOwner }) => {
  return (
    <List.Item
      className={style.item}
      actions={[
        <div className={style.actionBtns}>
          {!isOwner ? (
            <React.Fragment>
              <FollowBtn
                className={style.actionBtn}
                userId={user.id}
                followed={user.followed}
              />
              <SendMessage userId={user.id} className={style.actionBtn} />
            </React.Fragment>
          ) : null}
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
    </List.Item>
  );
});

export default Users;
