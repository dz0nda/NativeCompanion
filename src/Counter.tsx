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

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import {connect} from 'react-redux';

import {
  incrementAction,
  decrementAction,
  changeByAmount,
} from './redux/actions';

const Counter = props => {
  const increment = () => {
    console.log('here');
    props.dispatch(incrementAction());
  };

  const decrement = () => {
    props.dispatch(decrementAction());
  };

  const handleInputChange = event => {
    props.dispatch(changeByAmount(event.nativeEvent.text));
  };

  return (
    <View style={styles.container}>
      <Text>Counter: {props.amount}</Text>
      <View style={styles.floatingView}>
        <TouchableOpacity onPress={increment} style={styles.floatingButton}>
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

const mapStateToProps = (state, props) => {
  return {amount: state.counter.amount};
};

export default connect(mapStateToProps)(Counter);
