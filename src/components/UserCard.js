import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ url, name, tag, location, followers, views, likes }) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={url}
                    alt="Аватар пользователя"
                    className="avatar"
                    width="180"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )
};

UserCard.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default UserCard;