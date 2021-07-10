import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';

import UserAchievementsContainer from '../containers/UserAchievementsContainer';
import UserHeaderContainer from '../containers/UserHeaderContainer';
import UserCursusContainer from '../containers/UserCursusContainer';

export default () => {
  return (
    <Layout style={styles.container}>
      <Layout level="3">
        <UserHeaderContainer />
      </Layout>
      <Layout level="1" style={styles.container}>
        <UserCursusContainer />
      </Layout>
      <Layout level="2">
        <UserAchievementsContainer />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
