import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  YoutubeOutlined,
  FacebookOutlined,
  GithubOutlined,
  ContactsOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import style from "./Contacts.module.scss";
import { Button } from "antd";
import { getContacts } from "../../../Redux/profile/profile-selectors";

const contactIcon = (id) => {
  switch (id) {
    case "youtube": {
      return <YoutubeOutlined style={{ fontSize: "24px" }} />;
    }
    case "facebook": {
      return <FacebookOutlined style={{ fontSize: "24px" }} />;
    }
    case "github": {
      return <GithubOutlined style={{ fontSize: "24px" }} />;
    }
    case "vk": {
      return <ContactsOutlined style={{ fontSize: "24px" }} />;
    }
    case "twitter": {
      return <TwitterOutlined style={{ fontSize: "24px" }} />;
    }
  }
};

const ContactLink = ({ id, value }) => {
  return (
    <Button
      icon={contactIcon(id)}
      shape="circle"
      href={value}
      className={style.contactLink}
      size="large"
    />
  );
};

const ContactList = () => {
  const contacts = useSelector((state) => getContacts(state));
  const keys = Object.keys(contacts);

  const contactsBtn = keys.map((item) => {
    return <ContactLink key={item} id={item} value={contacts[item]} />;
  });

  return <div className={style.contactsInner}>{contactsBtn}</div>;
};

const Contacts = () => {
  const [contactMode, setContactMode] = useState(false);

  const onChangeContactMode = () => {
    setContactMode(!contactMode);
  };

  return (
    <div className={style.contacts}>
      <Button
        type="text"
        onClick={onChangeContactMode}
        className={style.contactBtn}
      >
        {contactMode ? "Скрыть контакты" : "Показать контакты"}
      </Button>
      {contactMode ? <ContactList /> : null}
    </div>
  );
};

export default Contacts;
