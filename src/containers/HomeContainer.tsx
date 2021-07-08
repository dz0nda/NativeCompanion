import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {List, ListItem, Avatar} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

import {selectStatus, selectUsers, searchUser} from '../redux/reducer';
import {useAppSelector, useAppDispatch} from '../hooks/global';
import {useInterval, useTimeout} from '../hooks/useInterval';

import HomeUsers from '../components/home/HomeUsers';

export default () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  const status = useAppSelector(selectStatus);
  const users = useAppSelector(selectUsers);
  const navigation = useNavigation();

  const sendRequest = (entry: string) => {
    dispatch(searchUser(entry));
  };

  const onChangeQuery = (nextQuery: string) => {
    setQuery(nextQuery);
  };

  const onPressQuery = () => {
    navigation.navigate('User');
  };

  useTimeout(() => dispatch(searchUser(query)), query);

  // useEffect(() => {
  //   if (status === 'success') {
  //     navigation.navigate('User');
  //   }
  // }, [status, navigation]);

  return (
    <HomeUsers
      query={query}
      users={users}
      status={status}
      onChangeQuery={onChangeQuery}
      onPressQuery={onPressQuery}
    />
  );
};
