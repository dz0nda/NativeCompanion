import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';

export default () => {
  return (
    <View style={styles.headerContainer}>
      <Text category="h1" status="control">
        Explorer 42
      </Text>
      <Text style={styles.signInLabel} category="s1" status="control">
        Search user by login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    backgroundColor: '#3366FF',
  },
  signInLabel: {
    marginTop: 16,
  },
});
