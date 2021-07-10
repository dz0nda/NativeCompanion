import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Divider, List, ListItem, Icon} from '@ui-kitten/components';

import {ProjectsInfos} from '../../redux/types';

export interface UserProjectsProps {
  projects: Array<ProjectsInfos>;
}

type renderProjectProps = {
  item: ProjectsInfos;
};
const ValidIcon = (props: any) => <Icon {...props} name="checkmark-outline" />;
const FalseIcon = (props: any) => <Icon {...props} name="close-outline" />;

export const UserProjecs = (props: UserProjectsProps): React.ReactElement => {
  const renderMark = (validated: boolean, final_mark: number) => {
    console.log(validated, final_mark);
    return (
      <Button
        size="small"
        accessoryLeft={validated ? ValidIcon : FalseIcon}
        status={validated ? 'success' : 'danger'}>
        {final_mark ? final_mark : '0'}
      </Button>
    );
  };

  const renderProject = ({item}: renderProjectProps) => {
    const {project} = item;
    console.log(item, project);

    return (
      <ListItem
        key={item.id}
        title={`${project.name}`}
        accessoryRight={() => renderMark(item['validated?'], item.final_mark)}
      />
    );
  };

  return (
    <List
      style={styles.list}
      data={props.projects}
      ItemSeparatorComponent={Divider}
      renderItem={renderProject}
      nestedScrollEnabled
    />
  );
};

const styles = StyleSheet.create({
  UserProjectsContainer: {
    flex: 1,
  },
  sectionLabel: {
    marginTop: 24,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  list: {
    minHeight: 200,
    maxHeight: 200,
    width: '100%',
  },
});

export default UserProjecs;
