import React from 'react';

import UserCard from './components/UserCard/UserCard';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from './components/Container/Container';

import users from './user.json';
import StatisticsData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
    <Container>
      <UserCard
        url={users.avatar}
        name={users.name}
        tag={users.tag}
        location={users.location}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
      <Statistics StatisticsData={StatisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
