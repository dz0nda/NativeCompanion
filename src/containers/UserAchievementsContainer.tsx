import React from 'react';

import {selectUserAchievements} from '../redux/reducer';
import {useAppSelector} from '../hooks/global';

import {UserAchievements} from '../components/user/UserAchievements';

export default () => {
  const achievements = useAppSelector(selectUserAchievements);

  return <UserAchievements achievements={achievements} />;
};
