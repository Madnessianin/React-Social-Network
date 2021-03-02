import React from "react";
import style from "./FormsControl.module.css";

const FormControl = ({ meta, input, child, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={style.formControl}>
      <div className={style.inputWrapper + " " + (hasError ? style.error : "")}>
        {props.children}
      </div>
      {hasError && (
        <div className={style.innerError}>
          <i className="fas fa-exclamation" />
          <span className={style.textError}>{meta.error}</span>
        </div>
      )}
    </div>
  );
};

export const Textarea = (props) => {
  const { meta, input, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { meta, input, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const RadioGroup = ({ meta, input, ...props }) => {
  return (
    <div className={style.radioWrapper}>
      <label className={style.radioBtnValue}>
        <input {...input} {...props} value="men" id={"men"} checked />
        {"Men"}
      </label>
      <label className={style.radioBtnValue}>
        <input {...input} {...props} value="women" id={"women"} checked />
        {"Women"}
      </label>
    </div>
  );
};

export const Checkbox = ({ meta, input, ...props }) => {
  return (
    <div className={style.checkbox}>
      <input {...input} {...props} />
    </div>
  );
};

export const MyDate = ({ meta, input, ...props }) => {
  return (
    <div className={style.date}>
      <input {...input} {...props} />
    </div>
  );
};
