import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../Utils/Validators/validators";
import Button from "../Button/Button";
import { Textarea } from "../FormsControl/FormsControl";
import style from "./EditForm.module.css";

const FormEdit = (props) => {
  return (
    <form className={style.form} onSubmit={props.handleSubmit}>
      <div className={style.formInner}>
        <Field
          placeholder={"Enter new text...."}
          name={props.identifierText}
          component={Textarea}
          validate={[required]}
        />
      </div>
      <div className={style.btn}>
        <Button textBtn={"Add post"} type={"submit"} />
      </div>
    </form>
  );
};
const FormEditConteiner = reduxForm()(FormEdit);

export default FormEditConteiner;
