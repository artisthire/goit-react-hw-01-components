import React from 'react';
import s from './friendlist.module.scss';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={s.item} key={id}>
    <span
      className={isOnline ? `${s.status} ${s.status_online}` : `${s.status}`}
    ></span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

export default FriendListItem;
