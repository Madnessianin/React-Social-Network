import React, { useEffect, useState } from "react";
import style from "./Users.module.scss";
import Preloader from "../Common/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getCurrentPage, getFollowingIsProgress, getIsFetching, getPageSize, getTotalUsersCount } from "../../Redux/users-selectors";
import { getAutorizedUserId } from "../../Redux/profile-selectors";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import { getUsers, setCurrentPage } from "../../Redux/users-reducer";
import { Pagination } from "antd";

const Users = (props) => {
  const totalCount = useSelector(state => getTotalUsersCount(state));
  const pageSize = useSelector(state => getPageSize(state))
  const currentPage = useSelector(state => getCurrentPage(state))
  const isFetching = useSelector(state => getIsFetching(state))
  const users = useSelector(state => getAllUsers(state))

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getUsers(currentPage, pageSize))
  }, [pageSize, currentPage])

  const onPageChanged = (page) => {
    dispatch(setCurrentPage(page))
    dispatch(getUsers(currentPage, page))
  }

  return (
    <div className={style.users}>
      <Pagination
        total={totalCount}
        defaultCurrent={1}
        pageSize={pageSize}
        current={currentPage}
        onChange={onPageChanged}
      />
      {isFetching ? (
        <div className={style.preloader}>
          <Preloader />
        </div>
      ) : null}
      <div className={style.inner}>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

const User = ({ user }) => {
  const authId = useSelector(state => getAutorizedUserId(state));
  const followedProgres = useSelector(state => getFollowingIsProgress(state))
  return (
    <div key={user.id} className={style.item}>
      <div>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              alt=""
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={style.user_photo}
            />
          </NavLink>
        </div>
        <div>{user.name}</div>
        {user.id !== authId && (
          <div>
            {user.followed ? (
              <button
                disabled={followedProgres.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followedProgres.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        )}
        <div>
          {user.status == null || user.status.length >= 20
            ? "------"
            : user.status}
        </div>
        <div>{"user.location.country"}</div>
        <div>{"user.location.city"}</div>
      </div>
    </div>
  );
};

export default Users;
