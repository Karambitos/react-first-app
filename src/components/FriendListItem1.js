import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem1 = ({friends}) => {
    return (
        friends.map(({ id, isOnline, avatar, name }) => {
            return (
                <li className="item" key={id}>
                    <span className={isOnline ? "status status-grean" : "status status-red"}></span>
                    <img className="avatar" src={avatar} alt="" width="48" />
                    <p className="name">{name}</p>                            
                </li>
            )
        })
    )
};

FriendListItem1.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })).isRequired
}


export default FriendListItem1;