import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import FriendListItem1 from './FriendListItem1';


const FriendList = ({friends}) => {
    return (
        <section className="friens">
            <ul className="friend-list">
                {/* {friends.map((friend) => {
                    return (
                        <FriendListItem
                            key={friend.id}
                            isOnline={friend.isOnline}
                            name={friend.name}
                            avatar={friend.avatar}/>
                    )
                })} */}
                <FriendListItem1
                    friends={ friends }/>
            </ul>
        </section>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })).isRequired
}

export default FriendList;