import Profile from '../profile';
import Statistics from '../statistics';
import FriendList from '../friendlist';
import TransactionHistory from '../transactionhistory';

import userData from '../../data/user.json';
import statistics from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.app}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
