import React from "react";
import preloader from "../../../assets/images/Preloader.svg";
import style from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={style.inner}>
      <img className={style.img} src={preloader} />
    </div>
  );
};
export default Preloader;
