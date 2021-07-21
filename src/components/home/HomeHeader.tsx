import React from 'react';
import {View} from 'react-native';
import {Text, StyleService, useStyleSheet} from '@ui-kitten/components';

export default () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.headerContainer}>
      <Text category="h1" status="control" style={styles.headerContainerTitle}>
        Native Companion
      </Text>
      <Text style={styles.signInLabel} category="s1" status="control">
        Search 42 user by login
      </Text>
    </View>
  );
};

const themedStyles = StyleService.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    backgroundColor: 'color-primary-default',
  },
  headerContainerTitle: {
    fontWeight: 'bold',
  },
  signInLabel: {
    marginTop: 16,
  },
});
