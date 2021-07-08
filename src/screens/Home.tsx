import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';

import HomeHeader from '../components/home/HomeHeader';
import HomeUsersContainer from '../containers/HomeContainer';

export default () => {
  return (
    <Layout style={styles.home}>
      <HomeHeader />
      <HomeUsersContainer />
    </Layout>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});
