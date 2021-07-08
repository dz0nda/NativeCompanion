import React from 'react';
import {StyleSheet} from 'react-native';
import {TabView, Tab, Layout, Text} from '@ui-kitten/components';
import {CursusInfos} from '../../redux/types';

export interface UserCurusProps {
  cursus: Array<CursusInfos>;
}

export const UserCursus = (props: UserCurusProps): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  console.log(props.cursus);

  const renderCursus = (id: number) => {
    return (
      <Tab title={`cursus-${id}`}>
        <Layout style={styles.tabContainer}>
          <Text category="h5">{`cursus-${id}`}</Text>
        </Layout>
      </Tab>
    );
  };

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      {props.cursus.map(cursus => (
        <Tab title={`cursus-${cursus.cursus_id}`}>
          <Layout style={styles.tabContainer}>
            <Text category="h5">{`cursus-${cursus.cursus_id}`}</Text>
          </Layout>
        </Tab>
      ))}
      {/* {renderCursus('42')}
      {renderCursus('42Cursus')}
      {renderCursus('Piscine C')} */}
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserCursus;
