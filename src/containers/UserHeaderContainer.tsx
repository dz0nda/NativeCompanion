import React from 'react';

import {selectUserHeader} from '../redux/reducer';
import {useAppSelector} from '../hooks/global';

import UserHeader from '../components/user/UserHeader';

export default () => {
  const user = useAppSelector(selectUserHeader);

  console.log(user);

  return <UserHeader user={user} />;
};
