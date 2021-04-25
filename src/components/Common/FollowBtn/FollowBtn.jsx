import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { follow, unfollow } from "../../../Redux/users/users-reducer";

const FollowBtn = ({ className, userId, followed }) => {
  const [isFollowed, setIsFollowed] = useState(followed);

  useEffect(() => {
    setIsFollowed(followed);
  }, [followed]);

  const dispatch = useDispatch();
  const followOnUser = () => {
    dispatch(follow(userId));
  };
  const unfollowFromUser = () => {
    dispatch(unfollow(userId));
  };
  return (
    <Button
      className={className}
      type="primary"
      onClick={isFollowed ? unfollowFromUser : followOnUser}
    >
      {isFollowed ? "Отписаться" : "Подписаться"}
    </Button>
  );
};

export default FollowBtn;
