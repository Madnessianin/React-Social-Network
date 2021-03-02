import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import Changes from "../../../Common/Changes/Changes";
import { Input, Textarea } from "../../../Common/FormsControl/FormsControl";
import style from "../../Edit.module.css";

const ProfileDataForm = (props) => {
  let [saveChange, setSaveChange] = useState(false);
  return (
    <form className={style.formWrapper} onSubmit={props.handleSubmit}>
      {saveChange && <Changes />}
      <div className={style.formInner}>
        <div className={style.formItem}>
          <label className={style.formLabel} htmlFor={"fullName"}>
            {"fullName: "}
          </label>
          <Field
            name={"fullName"}
            placeholder={""}
            component={Input}
            validate={[]}
          />
        </div>
        <div className={style.formItem}>
          <label className={style.formLabel} htmlFor={"aboutMe"}>
            {"aboutMe: "}
          </label>
          <Field
            name={"aboutMe"}
            placeholder={""}
            component={Input}
            validate={[]}
          />
        </div>
        <div className={style.formItem}>
          <label className={style.formLabel} htmlFor={"lookingForAJob"}>
            {"lookingForAJob: "}
          </label>
          <Field
            name={"lookingForAJob"}
            placeholder={""}
            component={Input}
            validate={[]}
            type={"checkbox"}
          />
        </div>
        <div className={style.formItem}>
          <label
            className={style.formLabel}
            htmlFor={"lookingForAJobDescription"}
          >
            {"My profecional skills: "}
          </label>
          <Field
            name={"lookingForAJobDescription"}
            placeholder={""}
            component={Textarea}
            validate={[]}
            type={"text"}
          />
        </div>
      </div>
      <div>
        <button
          className={style.formBtn}
          onClick={() => {
            return props.error == null && setSaveChange(true);
          }}
        >
          Save change
        </button>
      </div>
    </form>
  );
};
const ProfileDataReduxForm = reduxForm({ form: "profileInfo" })(
  ProfileDataForm
);
export default ProfileDataReduxForm;
