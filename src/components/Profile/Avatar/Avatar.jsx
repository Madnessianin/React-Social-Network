import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePhoto } from "../../../Redux/profile-reducer";
import userPhoto from "../../../assets/images/user.png";
import { getProfilePhoto } from "../../../Redux/profile-selectors";
import { Image } from "antd";

const MyAvatar = ({ isOwner }) => {
  const photos = useSelector((state) => getProfilePhoto(state));
  const dispatch = useDispatch();
  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      dispatch(savePhoto(event.target.files[0]));
    }
  };
  return (
    <div>
      <Image width={280} src={photos || userPhoto} />
      <div className="">
        {isOwner && <LoadFile onMainPhotoSelected={onMainPhotoSelected} />}
      </div>
    </div>
  );
};

const LoadFile = (props) => {
  return (
    <div className="">
      <i className="fas fa-download"></i>
      <input
        className=""
        onChange={props.onMainPhotoSelected}
        id="file"
        name={"file"}
        type={"file"}
      />
      <label className="" htmlFor={"file"}>
        Choose file
      </label>
    </div>
  );
};

export default MyAvatar;
