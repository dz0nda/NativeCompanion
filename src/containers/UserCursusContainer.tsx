import React from 'react';
import {IndexPath, Spinner} from '@ui-kitten/components';

import {selectUserCursus, selectUserProjects} from '../redux/reducer';
import {useAppSelector} from '../hooks/global';

import {SelectDisplayValueShowcase} from '../components/user/UserCursus';

export default () => {
  const cursus = useAppSelector(selectUserCursus);
  const projects = useAppSelector(selectUserProjects);
  const [selectedCursus, setSelectedCursus] = React.useState(new IndexPath(0));

  const onSelectCursus = (index: any) => setSelectedCursus(index);

  if (cursus && projects) {
    return (
      <SelectDisplayValueShowcase
        cursus={cursus}
        projects={projects.filter(
          project =>
            project.cursus_ids[0] === cursus[selectedCursus.row].cursus_id &&
            !(project['validated?'] === true && project.final_mark === 0),
        )}
        selectedCursus={selectedCursus}
        onSelectCursus={onSelectCursus}
      />
    );
  }

  return <Spinner />;
  // return (
  //   <SelectDisplayValueShowcase
  //     cursus={cursus[selectedCursus.row]}
  //     projects={projects.filter(
  //       project =>
  //         project.cursus_ids[0] === cursus.cursus_id &&
  //         !(project['validated?'] === true && project.final_mark === 0),
  //     )}
  //   />
  // );
};
