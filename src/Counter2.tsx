/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript explorer42
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

import {useAppSelector, useAppDispatch} from './hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './redux/reducer';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <View style={styles.floatingView}>
        <TouchableOpacity
          onPress={() => dispatch(increment())}
          style={styles.floatingButton}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <TextInput keyboardType="numeric" placeholder="change amount" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingView: {
    flexDirection: 'row',
  },
  floatingButton: {},
});

export default Counter;
