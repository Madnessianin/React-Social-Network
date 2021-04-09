import React from "react";
import {
  PlayCircleOutlined,
  CameraOutlined,
  FileTextOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import style from "./AdditionalBtns.module.scss";
import { Button } from "antd";

const AdditionalBtns = () => {
  return (
    <div className={style.additionalBtns}>
      <Button
        shape="circle"
        className={style.additionalBtn}
        icon={<SoundOutlined />}
      />
      <Button
        shape="circle"
        className={style.additionalBtn}
        icon={<CameraOutlined />}
      />
      <Button
        shape="circle"
        className={style.additionalBtn}
        icon={<PlayCircleOutlined />}
      />
      <Button
        shape="circle"
        className={style.additionalBtn}
        icon={<FileTextOutlined />}
      />
    </div>
  );
};

export default AdditionalBtns;
