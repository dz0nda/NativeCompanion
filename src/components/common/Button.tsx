import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';

interface ButtonProps {
  title: string;
  disabled: boolean;
  onPress: () => void;
}

export default (props: ButtonProps): React.ReactElement => {
  return (
    <Button
      onPress={props.onPress}
      style={styles.button}
      size="large"
      disabled={props.disabled}>
      {props.title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
});
