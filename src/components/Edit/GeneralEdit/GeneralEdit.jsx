import React from "react";

import style from "../Edit.module.css";
import ProfileDataReduxForm from "./ProfileDataForm/ProfileDataForm";

const GeneralEdit = (props) => {
  const onSubmit = (data) => {
    props.saveProfileInfo(data);
  };
  return (
    <div className={style.form}>
      <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} />
    </div>
  );
};

export default GeneralEdit;
