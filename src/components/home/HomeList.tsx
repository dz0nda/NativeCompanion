import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Layout,
  Text,
  List,
  ListItem,
  Avatar,
  Spinner,
} from '@ui-kitten/components';
import {UsersInfos, StatusProps} from '../../redux/types';

interface HomeUsersProps {
  status: StatusProps;
  users: UsersInfos[];
}

export const HomeList = (props: HomeUsersProps): React.ReactElement => {
  const ItemImage = (itemProps: any) => {
    return <Avatar {...itemProps} source={{uri: itemProps.image_url}} />;
  };

  const renderItem = ({item, index}) => (
    <ListItem
      style={styles.item}
      title={`${item.login}`}
      accessoryLeft={() => ItemImage(item)}
    />
  );

  const renderHeader = (): React.ReactElement => {
    let message = '';
    const nbResult = props.users.length ? 1 : 0;
    message = `${nbResult} result found`;
    // if (props.query !== '') {
    //   message = `${nbResult} result found`;
    // }

    return (
      <Layout style={styles.header} level="1">
        <Text>{message}</Text>
      </Layout>
    );
  };

  if (props.status === 'loading') {
    return (
      <Layout style={styles.spinner}>
        <Spinner />
      </Layout>
    );
  }

  return (
    <List
      style={styles.list}
      data={props.users}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    minHeight: 180,
    // maxHeight: 180,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  item: {
    margin: 5,
    paddingVertical: 16,
    borderBottomWidth: 1,
    // borderBottomColor: ,
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeList;
