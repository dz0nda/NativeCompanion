import React from 'react';
import {View, ViewProps} from 'react-native';
import {Text, StyleService, useStyleSheet} from '@ui-kitten/components';

export interface BoxInfoProps extends ViewProps {
  hint: string;
  value: string;
}

export const BoxInfo = (props: BoxInfoProps): React.ReactElement => {
  const {value} = props;
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <Text category="s2" status="control" style={styles.value}>
        {value}
      </Text>
      <Text
        appearance="alternative"
        category="c2"
        status="control"
        style={styles.hint}>
        {props.hint}
      </Text>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  value: {
    fontWeight: '700',
  },
  hint: {
    color: 'color-primary-default',
  },
});

export default BoxInfo;
