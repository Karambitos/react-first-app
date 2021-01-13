import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem1 from '../FriendListItem/FriendListItem1';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={styles.friens}>
      <ul className={styles.friendList}>
        <FriendListItem1 friends={friends} />
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default FriendList;
