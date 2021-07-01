import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

export default () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category="h1">
      Explorer 42 - User
    </Text>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
