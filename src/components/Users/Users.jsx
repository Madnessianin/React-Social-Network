import React from "react";
import style from "./Users.module.scss";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User/User";
import Preloader from "../Common/Preloader/Preloader";

const Users = (props) => {
  return (
    <div className={style.users}>
      <Paginator
        totalCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {props.isFetching ? (
        <div className={style.preloader}>
          <Preloader />
        </div>
      ) : null}
      <div className={style.inner}>
        {props.users.map((user) => (
          <User
            key={user.id}
            user={user}
            follow={props.follow}
            unfollow={props.unfollow}
            followingIsProgress={props.followingIsProgress}
            autorizedUserId={props.autorizedUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
