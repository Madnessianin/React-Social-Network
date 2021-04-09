import { Input } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../../../Redux/profile/profile-reducer";
import { getUserStatus } from "../../../../Redux/profile/profile-selectors";
import style from "./ProfileStatus.module.scss";

const ProfileStatus = (props) => {
  const status = useSelector((state) => getUserStatus(state));

  return (
    <div>
      {props.isOwner ? (
        <Status status={status} />
      ) : (
        <span>{props.status || "--"}</span>
      )}
    </div>
  );
};

const Status = ({ status }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  const onEditMode = () => {
    setEditMode(true);
  };

  const onChangeStatus = (event) => {
    setCurrentStatus(event.currentTarget.value);
  };

  const dispatchStatus = () => {
    setEditMode(false);
    dispatch(updateStatus(currentStatus));
  };

  return (
    <div>
      {!editMode && (
        <span className={style.status} onDoubleClick={onEditMode}>
          {currentStatus || "--"}
        </span>
      )}
      {editMode && (
        <Input
          onPressEnter={dispatchStatus}
          onChange={onChangeStatus}
          defaultValue={status}
          className={style.statusInput}
          value={currentStatus}
        />
      )}
    </div>
  );
};
export default ProfileStatus;
