import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePhoto } from "../../../Redux/profile-reducer";
import userPhoto from "../../../assets/images/user.png";
import { getProfilePhoto } from "../../../Redux/profile-selectors";
import { Upload, Image, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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
      <Upload>
        <Button
          style={{ width: "280px", marginTop: "10px" }}
          icon={<UploadOutlined />}
        >
          Выбрать фото
        </Button>
      </Upload>
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
