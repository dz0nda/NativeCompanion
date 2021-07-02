import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Layout,
  Text,
  Avatar,
  Divider,
  List,
  ListItem,
} from '@ui-kitten/components';
import {useAppSelector} from '../hooks/global';
import {selectUser} from '../redux/reducer';
import {AchievementsInfos} from '../redux/types';

import {UserStat} from '../components/UserStat';

type renderItemProps = {
  item: AchievementsInfos;
};

export default () => {
  const user = useAppSelector(selectUser);

  const renderItem = ({item}: renderItemProps) => (
    <ListItem title={`${item.name}`} description={`${item.description}`} />
  );

  return (
    <Layout style={styles.container} level="2">
      <Layout style={styles.header} level="1">
        <View style={styles.profileContainer}>
          <Avatar
            style={styles.profileAvatar}
            size="large"
            source={{uri: user.image_url}}
          />
          <View style={styles.profileDetailsContainer}>
            <Text category="h4">{user.login}</Text>
            <Text appearance="hint" category="s1">
              {`${user.first_name}, ${user.last_name}`}
            </Text>
          </View>
        </View>
        <View style={styles.profileParametersContainer}>
          <View style={styles.profileSocialsSection}>
            <UserStat
              style={styles.profileSocialContainer}
              hint="Wallet"
              value={`${user.wallet}`}
            />
            <UserStat
              style={styles.profileSocialContainer}
              hint="Correction points"
              value={`${user.correction_point}`}
            />
            <UserStat
              style={styles.profileSocialContainer}
              hint="Location"
              value={`${user.location}`}
            />
          </View>
          <Divider style={styles.profileSectionsDivider} />
          <List
            style={styles.listContainer}
            data={user.achievements}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </View>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  listContainer: {
    maxHeight: 300,
  },
  header: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileAvatar: {
    marginHorizontal: 8,
  },
  profileDetailsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  rateBar: {
    marginTop: 24,
  },
  followButton: {
    marginTop: 24,
  },
  profileParametersContainer: {
    flexDirection: 'row',
    minHeight: 220,
    marginHorizontal: 8,
    marginTop: 24,
    marginBottom: 8,
  },
  profileSocialsSection: {
    marginHorizontal: 16,
  },
  profileSocialContainer: {
    flex: 1,
  },
  profileSectionsDivider: {
    width: 1,
    height: '100%',
    marginHorizontal: 8,
  },
  profileDescriptionSection: {
    flex: 1,
    marginHorizontal: 16,
  },
  profileParametersSection: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 8,
  },
  profileParameter: {
    flex: 1,
    marginHorizontal: 8,
  },
});
