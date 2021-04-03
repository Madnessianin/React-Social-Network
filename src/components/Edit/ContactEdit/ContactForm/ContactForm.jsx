import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../../Common/FormsControl/FormsControl";

import style from "../../Edit.module.scss";

const ContactForm = (props) => {
  return (
    <form className={style.formWrapper} onSubmit={props.handleSubmit}>
      <div className={style.formInner}>
        {Object.keys(props.contacts).map((key) => {
          return (
            <div className={style.formItem} key={key}>
              <label className={style.formLabel} htmlFor={key}>
                {key + " :"}
              </label>
              <Field
                name={"contacts." + key}
                placeholder={key}
                component={Input}
              />
            </div>
          );
        })}
      </div>
      <div>
        <button className={style.formBtn}>Save change</button>
      </div>
    </form>
  );
};

const ContactReduxForm = reduxForm({ form: "contactsInfo" })(ContactForm);

export default ContactReduxForm;
