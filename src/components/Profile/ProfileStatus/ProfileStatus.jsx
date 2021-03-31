import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserStatus } from "../../../Redux/profile-selectors";

const ProfileStatus = (props) => {
  const status = useSelector(state => getUserStatus(state));
  
  return (
    <div>
      {props.isOwner ? (
        <Status status = {status} />
      ) : (
        <span>{props.status || "--"}</span>
      )}
    </div>
  );
};

const Status = ({status}) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);
  
  useEffect(() => {
    setCurrentStatus(status);
  }, [status]); 
    
  const onEditMode = () => {
    setEditMode(true);
  }

  const onBlurMode = () => {
    setEditMode(false);
    dispatch(updateStatus(currentStatus));
  }

  const onChangeStatus = (event) => {
    setStatus(event.currentTarget.value)
  }

  return (
    <div>
      {!editMode && (
        <div>
          <span
            onDoubleClick={onEditMode}
          >
            {currentStatus || "--"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={onBlurMode}
            onChange={onChangeStatus}
            value={currentStatus}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatus;
