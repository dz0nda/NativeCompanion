import React from 'react';
import {ViewProps, useWindowDimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

import {SkillsInfos} from '../../redux/types';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const colors = [
  '#1abc9c',
  '#3498db',
  '#34495e',
  '#27ae60',
  '#8e44ad',
  '#f1c40f',
  '#e74c3c',
  '#95a5a6',
  '#d35400',
  '#bdc3c7',
  '#2980b9',
  '#e74c3c',
];

export interface UserSkillsProps extends ViewProps {
  skills: Array<SkillsInfos>;
}

export const UserSkills = (props: UserSkillsProps): React.ReactElement => {
  const windowWidth = useWindowDimensions().width;

  const chartData = props.skills.map((skill, index) => {
    return {
      ...skill,
      color: colors[index],
      legendFontColor: '#7F7F7F',
      legendFontSize: 7,
    };
  });

  console.log(chartData);

  return (
    <PieChart
      data={chartData}
      width={windowWidth}
      height={200}
      chartConfig={chartConfig}
      accessor={'level'}
      backgroundColor={'transparent'}
      paddingLeft={'5'}
    />
  );
};

export default UserSkills;
