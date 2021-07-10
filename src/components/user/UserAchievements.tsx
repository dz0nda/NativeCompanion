import React from 'react';
import {StyleSheet} from 'react-native';
import {List, ListElement, Card, Text} from '@ui-kitten/components';

import {AchievementsInfos} from '../../redux/types';

export interface UserAchievementsProps {
  achievements: Array<AchievementsInfos>;
}

type renderAchievementProps = {
  item: AchievementsInfos;
};

export const UserAchievements = ({
  achievements,
}: UserAchievementsProps): ListElement => {
  const renderAchievement = ({item}: renderAchievementProps) => (
    <Card status="primary" style={styles.card}>
      <Text category="label" style={styles.cardLabel}>
        {item.name}
      </Text>
      <Text category="c2">{item.description}</Text>
    </Card>
  );

  return (
    <React.Fragment>
      <Text style={styles.hint} category="h4">
        Achievements
      </Text>
      <List
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={achievements}
        renderItem={renderAchievement}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  hint: {
    margin: 16,
    fontWeight: '700',
  },
  listContainer: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  list: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  card: {
    width: 144,
    height: 144,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  cardLabel: {
    fontWeight: '700',
  },
});

export default UserAchievements;
