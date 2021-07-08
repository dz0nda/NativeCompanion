import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {UsersInfos, StatusProps} from '../../redux/types';

import Button from '../common/Button';
import Input from '../common/Input';

import HomeList from './HomeList';

interface HomeUsersProps {
  query: string;
  status: StatusProps;
  users: UsersInfos[];
  onChangeQuery: (nextQuery: string) => void;
  onPressQuery: () => void;
}

export const HomeUsers = (props: HomeUsersProps): React.ReactElement => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.header}>
        <Input
          placeholder={'Enter login'}
          value={props.query}
          onChangeText={props.onChangeQuery}
        />
      </Layout>
      <Layout style={styles.container}>
        <HomeList status={props.status} users={props.users} />
      </Layout>
      <Button
        onPress={props.onPressQuery}
        title="Go to user"
        disabled={!(props.status === 'success')}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
});

export default HomeUsers;
