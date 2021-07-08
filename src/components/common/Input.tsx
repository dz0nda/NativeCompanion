import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Input, Icon} from '@ui-kitten/components';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (nextValue: string) => void;
}

export default (props: InputProps): React.ReactElement => {
  const renderIcon = (defaultProps: any) => (
    <TouchableWithoutFeedback>
      <Icon {...defaultProps} name={'search'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      accessoryRight={renderIcon}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
});
