import { Button } from "antd";
import React from "react";
import style from "./Count.module.scss";

const Count = (Component) => ({ count, action }) => {
  return (
    <Button icon={<Component />} className={style.btn} onClick={action}>
      {count}
    </Button>
  );
};

export default Count;
