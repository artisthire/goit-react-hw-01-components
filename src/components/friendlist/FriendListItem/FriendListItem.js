import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.scss';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    <span
      className={isOnline ? `${s.status} ${s.status_online}` : `${s.status}`}
    />
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
