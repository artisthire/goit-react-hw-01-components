import React from 'react';
import FriendListItem from './FriendListItem';
import s from './friendlist.module.scss';

const FriendList = ({ friends }) => (
  <ul className={s.friend_list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
    ))}
  </ul>
);

export default FriendList;
