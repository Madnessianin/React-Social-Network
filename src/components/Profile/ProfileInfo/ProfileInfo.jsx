import React from "react";
import { useSelector } from "react-redux";
import { getProfile } from "../../../Redux/profile-selectors";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import style from "./ProfileInfo.module.scss";

const ProfileInfo = ({ isOwner }) => {
  const profile = useSelector((state) => getProfile(state));
  const { fullName, ...rest } = profile;

  return (
    <div className={style.profileInfo}>
      <div className={style.header}>
        <div className={style.headerItem}>
          <h1 className={style.profileName}>{fullName}</h1>
          <ProfileStatus isOwner={isOwner} />
        </div>
        <div className={style.headerItem}>{isOwner ? "online" : "ofline"}</div>
      </div>
      <Description {...rest} />
      <About />
    </div>
  );
};

const Description = ({
  aboutMe,
  lookingForAJob,
  lookingForAJobDescription,
}) => {
  console.log(aboutMe)
  return (
    <dd className={style.description}>
      <dl className={style.descriptionItem}>
        <span className={style.descriptionLabel}>Обо мне:</span>
        <span className={style.descriptionValue}>{aboutMe}</span>
      </dl>
      <dl className={style.descriptionItem}>
        <span className={style.descriptionLabel}>Местоположение: </span>
        <span className={style.descriptionValue}>Россия, г.Пермь</span>
      </dl>
      <dl className={style.descriptionItem}>
        <span className={style.descriptionLabel}>Трудоустройство:</span>
        <span className={style.descriptionValue}>
          {lookingForAJob ? "В поисках работы" : "Не ищу работу"}
        </span>
      </dl>
      <dl className={style.descriptionItem}>
        <span className={style.descriptionLabel}>Технологический стек: </span>
        <span className={style.descriptionValue}>
          {lookingForAJobDescription}
        </span>
      </dl>
    </dd>
  );
};

const About = () => {
  return (
    <dd className={style.about}>
      <dl className={style.aboutItem}>
        <span className={style.aboutCount}>58</span>
        <span className={style.aboutName}>друзей</span>
      </dl>
      <dl className={style.aboutItem}>
        <span className={style.aboutCount}>59</span>
        <span className={style.aboutName}>подписчиков</span>
      </dl>
      <dl className={style.aboutItem}>
        <span className={style.aboutCount}>19</span>
        <span className={style.aboutName}>фотографий</span>
      </dl>
      <dl className={style.aboutItem}>
        <span className={style.aboutCount}>3</span>
        <span className={style.aboutName}>видиозаписи</span>
      </dl>
      <dl className={style.aboutItem}>
        <span className={style.aboutCount}>13</span>
        <span className={style.aboutName}>аудиозаписей</span>
      </dl>
    </dd>
  );
};

export default ProfileInfo;
