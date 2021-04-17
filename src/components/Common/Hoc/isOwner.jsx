import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getAutorizedUserId } from '../../../Redux/auth/auth-selectors';


const isOwnerPage = (Component) => () => {
  const userId = useParams().userId;
  const authId = useSelector((state) =>
    getAutorizedUserId(state)
  ).toString();
  const isOwner = !userId || userId === authId;
  return <Component isOwner={isOwner} />
}


export default isOwnerPage;