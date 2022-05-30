import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.scss';

const FriendList = ({ friends }) => (
  <ul className={s.friend_list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
