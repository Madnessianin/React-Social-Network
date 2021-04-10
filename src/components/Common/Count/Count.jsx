import { Button } from "antd";
import React from "react";
import style from "./Count.module.scss";

const count = (Component) => ({ quantity, action }) => {
  return (
    <Button icon={<Component />} className={style.btn} onClick={action}>
      <span className={style.count}>{quantity}</span>
    </Button>
  );
};

export default count;
