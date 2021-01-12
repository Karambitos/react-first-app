import React from 'react';

import UserCard from './components/UserCard';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList'
import TransactionHistory from './components/TransactionHistory'

import users from './user.json';
import StatisticsData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
    return (
        <div className="users-box">
            <UserCard
                url={users.avatar}
                name={users.name}
                tag={users.tag}
                location={users.location}
                followers={users.stats.followers}
                views={users.stats.views}
                likes={users.stats.likes}
            />
            <Statistics
                StatisticsData={StatisticsData} />
            <FriendList
                friends={friends} />
            <TransactionHistory
                items={transactions} />
        </div>
    )
}

export default App;
