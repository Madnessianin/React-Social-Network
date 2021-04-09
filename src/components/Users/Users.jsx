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
import { getAutorizedUserId } from "../../Redux/profile/profile-selectors";
import { Link } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow,
} from "../../Redux/users/users-reducer";
import { Avatar, Button, List, Pagination } from "antd";

const Users = (props) => {
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
        dataSource={users}
        className={style.inner}
        renderItem={(user) => <User key={user.id} user={user} />}
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

const User = ({ user }) => {
  const authId = useSelector((state) => getAutorizedUserId(state));
  const followedProgres = useSelector((state) => getFollowingIsProgress(state));
  const dispatch = useDispatch();

  const followUser = (userId) => {
    dispatch(follow(userId));
  };

  const unfollowUser = (userId) => {
    dispatch(unfollow(userId));
  };
  console.log(user);
  return (
    <List.Item
      className={style.item}
      actions={[<Button onClick={followUser}>Добавить в друзья</Button>]}
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
};

export default Users;
