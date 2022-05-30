import Profile from './components/profile/';
import Statistics from './components/statistics/';
import FriendList from './components/friendlist/';
import TransactionHistory from './components/transactionhistory';
// data
import userData from './data/user.json';
import statistics from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
// style
import s from './app.module.scss';

export const App = () => {
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
