import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem1 = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <li className={styles.item} key={id}>
        <span
          className={isOnline ? styles.statusGrean : styles.statusRed}
        ></span>
        <img className={styles.avatar} src={avatar} alt="" />
        <p className={styles.name}>{name}</p>
      </li>
    );
  });
};

FriendListItem1.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default FriendListItem1;
