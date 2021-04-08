import { Button } from "antd";
import React from "react";
import style from "./Count.module.scss";

const Count = (Component) => ({ count, action }) => {
  return (
    <Button icon={<Component />} className={style.btn} onClick={action}>
      <span className={style.count}>{count}</span>
    </Button>
  );
};

export default Count;
