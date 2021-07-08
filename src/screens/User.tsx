import React from 'react';
import {View, StyleSheet, ScrollView, ListRenderItemInfo} from 'react-native';
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
import {
  AchievementsInfos,
  ProjectsInfos,
  ProjectsDetailsInfos,
} from '../redux/types';

import {UserStat} from '../components/user/UserStat';
import {UserSkills} from '../components/user/UserSkills';
import {UserCursus} from '../components/user/UserCursus';

import {skills} from '../components/user/mock';
import {mockUser} from '../redux/mock';

type renderItemProps = {
  item: AchievementsInfos;
};

type renderProjectProps = {
  item: ProjectsInfos;
};

export default () => {
  const user = useAppSelector(selectUser);

  const renderItem = ({item}: renderItemProps) => (
    <ListItem title={`${item.name}`} description={`${item.description}`} />
  );

  const renderProject = ({item}: renderProjectProps) => {
    const {project} = item;
    console.log(item, project);

    return (
      <ListItem title={`${project.name}`} description={`${item.final_mark}`} />
    );
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      <Layout style={styles.header}>
        <Avatar style={styles.profileAvatar} source={{uri: user.image_url}} />
        <Text style={styles.profileName} category="h5" status="control">
          {user.login}
        </Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location} status="control">
            {`${user.last_name} ${user.first_name}`}
          </Text>
        </View>
        <View style={styles.socialsContainer}>
          <UserStat
            style={styles.UserStat}
            hint="pool_year"
            value={`${user.pool_year}`}
          />
          <UserStat
            style={styles.UserStat}
            hint="wallet"
            value={`${user.wallet}`}
          />
          <UserStat
            style={styles.UserStat}
            hint="correction_point"
            value={`${user.correction_point}`}
          />
        </View>
      </Layout>
      <Layout level="2">
        <UserCursus cursus={mockUser.cursus_users} />
        {/* <UserSkills skills={skills} /> */}
        {/* <Text style={styles.sectionLabel} category="s2">
          About
        </Text>
        <View>
          <List
            style={styles.list}
            data={user.achievements}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
            nestedScrollEnabled
          />
        </View>
        <Text style={styles.sectionLabel} category="s1">
          About
        </Text>
        <View>
          <List
            style={styles.list}
            data={user.projects_users}
            ItemSeparatorComponent={Divider}
            renderItem={renderProject}
            nestedScrollEnabled
          />
        </View> */}
      </Layout>
    </ScrollView>
    // <Layout style={styles.container} level="2">
    //   <Layout style={styles.header} level="1">
    //     <View style={styles.profileContainer}>
    //       <Avatar
    //         style={styles.profileAvatar}
    //         size="large"
    //         source={{uri: user.image_url}}
    //       />
    //       <View style={styles.profileDetailsContainer}>
    //         <Text category="h4">{user.login}</Text>
    //         <Text appearance="hint" category="s1">
    //           {`${user.first_name}, ${user.last_name}`}
    //         </Text>
    //       </View>
    //     </View>
    //     <View style={styles.profileParametersContainer}>
    //       <View style={styles.UserStatsSection}>
    //         <UserStat
    //           style={styles.UserStatContainer}
    //           hint="Wallet"
    //           value={`${user.wallet}`}
    //         />
    //         <UserStat
    //           style={styles.UserStatContainer}
    //           hint="Correction points"
    //           value={`${user.correction_point}`}
    //         />
    //         <UserStat
    //           style={styles.UserStatContainer}
    //           hint="Location"
    //           value={`${user.location}`}
    //         />
    //       </View>
    //       <Divider style={styles.profileSectionsDivider} />
    // <List
    //   style={styles.listContainer}
    //   data={user.achievements}
    //   ItemSeparatorComponent={Divider}
    //   renderItem={renderItem}
    // />
    //     </View>
    //   </Layout>
    // </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  profileAvatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    marginVertical: 16,
  },
  profileName: {
    zIndex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    marginVertical: 8,
  },
  profileButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 32,
    marginHorizontal: 20,
  },
  profileButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  socialsContainer: {
    flexDirection: 'row',
    width: '75%',
    marginVertical: 8,
  },
  UserStat: {
    flex: 1,
  },
  sectionLabel: {
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  profileDescription: {
    marginHorizontal: 16,
  },
  friendsList: {
    marginHorizontal: 8,
  },
  friendItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  friendName: {
    marginTop: 8,
  },
  postItem: {
    flex: 1,
    aspectRatio: 1.0,
  },
  list: {
    minHeight: 180,
    maxHeight: 180,
    paddingHorizontal: 10,
  },
});
