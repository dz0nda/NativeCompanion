import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';

export default (props: any) => (
  <Layout style={styles.container}>
    <Text style={styles.text} category="h1">
      Explorer 42
    </Text>
    <Button onPress={() => props.navigation.navigate('User')}>
      Go to user
    </Button>
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
