import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.svg';


const FriendListItem = ({id, avatar, name, isOnline}) => {
    return (
        <li className="item" key={id}>
            <span className={isOnline ? "status status-grean" : "status status-red"}></span>
            <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name">{name}</p>                            
        </li>
    )
};

FriendListItem.defaultProps = {
    avatar: defaultImg,
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;