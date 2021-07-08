import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Spinner} from '@ui-kitten/components';

type HomeStatusProps = {
  status: 'idle' | 'loading' | 'success' | 'failed';
};

export default ({status}: HomeStatusProps) => {
  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <Text style={styles.text} category="s1">
      {status === 'failed' ? 'User not found' : ''}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
