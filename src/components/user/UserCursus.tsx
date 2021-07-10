import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  TabView,
  Tab,
} from '@ui-kitten/components';

import {CursusInfos, ProjectsInfos} from '../../redux/types';

import BoxInfo from '../common/BoxInfo';
import UserProjects from './UserProjects';
import UserSkills from './UserSkills';

export interface UserCursusProps {
  cursus: Array<CursusInfos>;
  projects: Array<ProjectsInfos>;
  selectedCursus: IndexPath;
  onSelectCursus: (index: any) => void;
}

export const SelectDisplayValueShowcase = (props: UserCursusProps) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const cursus = props.cursus[props.selectedCursus.row];

  const renderSelectCursus = (selectCursus: CursusInfos) => (
    <SelectItem key={selectCursus.id} title={selectCursus.cursus.name} />
  );

  return (
    <View style={styles.container}>
      <Layout level="1" style={styles.containerHeader}>
        <Select
          style={styles.select}
          placeholder="Default"
          value={cursus.cursus.name}
          selectedIndex={props.selectedCursus}
          onSelect={props.onSelectCursus}>
          {props.cursus.map(renderSelectCursus)}
        </Select>
        <View style={styles.containerHeader}>
          <BoxInfo hint="level" value={`${cursus.level}`} />
          <BoxInfo hint="grade" value={`${cursus.grade}`} />
        </View>
      </Layout>

      <TabView
        selectedIndex={selectedTab}
        onSelect={index => setSelectedTab(index)}
        shouldLoadComponent={(index: any) => index === selectedTab}>
        <Tab title="Projects">
          <UserProjects projects={props.projects} />
        </Tab>
        <Tab title="Skills">
          <UserSkills skills={cursus.skills} />
        </Tab>
      </TabView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  select: {
    flex: 1,
    margin: 2,
  },
});
