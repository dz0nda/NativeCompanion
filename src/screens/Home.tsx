import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Button, Input} from '@ui-kitten/components';
import {searchUser, selectStatus} from '../redux/reducer';
import {useAppSelector, useAppDispatch} from '../hooks/global';

import HomeHeader from '../components/HomeHeader';
import HomeStatus from '../components/HomeStatus';

export default (props: any) => {
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');

  const sendRequest = (entry: string) => {
    dispatch(searchUser(entry));
  };

  useEffect(() => {
    if (status === 'success') {
      props.navigation.navigate('User');
    }
  }, [status, props.navigation]);

  return (
    <Layout style={styles.container}>
      <HomeHeader />
      <Layout style={styles.formContainer}>
        <Input
          placeholder="Enter a login"
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
        />
      </Layout>
      <Layout style={styles.statusContainer}>
        <HomeStatus status={status} />
      </Layout>
      <Button
        onPress={() => sendRequest(value)}
        style={styles.signInButton}
        size="giant">
        SEARCH USER
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  statusContainer: {
    flex: 1,
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
});
