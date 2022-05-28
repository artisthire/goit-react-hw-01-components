import Profile from './components/profile/';
import Statistics from './components/statistics/';
import FriendList from './components/friendlist/';
// data
import userData from './data/user.json';
import statistics from './data/data.json';
import friends from './data/friends.json';
// style
import s from './app.module.scss';

export const App = () => {
  return (
    <div className={s.app}>
      <Profile
        username={userData.username}
        // убираем @ в теге соцсети
        tag={userData.tag.replace('@', '')}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />

      <FriendList friends={friends} />
    </div>
  );
};
