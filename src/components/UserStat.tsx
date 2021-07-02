import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {Text} from '@ui-kitten/components';

export interface UserStatProps extends ViewProps {
  hint: string;
  value: string;
}

export const UserStat = (props: UserStatProps): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {style, hint, value, ...viewProps} = props;

  return (
    <View {...viewProps} style={[styles.container, style]}>
      <Text category="s2">{value}</Text>
      <Text appearance="hint" category="c2">
        {props.hint}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
