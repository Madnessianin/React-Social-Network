import React from "react";
import { useState } from "react";
import ContactReduxForm from "./ContactForm/ContactForm";
import style from "../Edit.module.css";
import Changes from "../../Common/Changes/Changes";

const ContactEdit = (props) => {
  let [saveChange, setSaveChange] = useState(false);
  const onSubmitContact = (data) => {
    props.saveProfileInfo(data, "contactsInfo").then(() => {
      setSaveChange(true);
    });
  };
  return (
    <div className={style.form}>
      {saveChange && <Changes />}
      <ContactReduxForm
        onSubmit={onSubmitContact}
        initialValues={props.profile}
        contacts={props.profile.contacts}
      />
    </div>
  );
};

export default ContactEdit;
