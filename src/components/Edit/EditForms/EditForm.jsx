import React from "react";
import style from "./EditForm.module.scss";

const EditForm = (Component) => ({ title, ...rest }) => {
  return (
    <div className={style.inner}>
      <h3 className={style.title}>{title}</h3>
      <Component {...rest} />
    </div>
  );
};

export default EditForm;
