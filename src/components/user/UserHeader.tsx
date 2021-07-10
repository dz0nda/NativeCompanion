import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text, Avatar} from '@ui-kitten/components';

import {UserInfos} from '../../redux/types';
import {UserStat} from '../common/UserStat';

export interface UserHeaderProps2 {
  login: string;
  last_name: string;
  first_name: string;
  image_url: string;
  pool_year: number;
  wallet: number;
  correction_point: number;
}

export interface UserHeaderProps {
  user: UserInfos;
}

export const UserHeader = (props: UserHeaderProps): React.ReactElement => {
  const {user} = props;

  return (
    <Layout style={styles.header} level="3">
      <View style={styles.headerTop}>
        <View style={styles.headerTopInfos}>
          <Text category="h4">{user.login}</Text>
          <Text appearance="hint" category="s1">
            {`${user.last_name} ${user.first_name}`}
          </Text>
        </View>
        <Avatar
          style={styles.headerTopAvatar}
          size="giant"
          source={{uri: user.image_url}}
        />
      </View>
      <View style={styles.headerBottom}>
        <UserStat hint="pool year" value={`${user.pool_year}`} />
        <UserStat hint="wallet" value={`${user.wallet}`} />
        <UserStat hint="correction point" value={`${user.correction_point}`} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  headerTop: {
    flexDirection: 'row',
  },
  headerTopInfos: {
    flex: 1,
    marginHorizontal: 8,
  },
  headerTopAvatar: {
    marginHorizontal: 8,
  },
  headerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 24,
    marginBottom: 8,
  },
});

export default UserHeader;
