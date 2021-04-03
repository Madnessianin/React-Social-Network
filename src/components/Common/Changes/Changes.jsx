import React from "react";
import style from "./Changes.module.scss";

const Changes = () => {
  return (
    <div className={style.change}>
      <i className="far fa-check-circle"></i>
      <span className={style.changeLegend}>Change saved!</span>
    </div>
  );
};

export default Changes;
