import Profile from './components/profile/';
import s from './app.module.scss';
import userData from './data/user.json';

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
    </div>
  );
};
