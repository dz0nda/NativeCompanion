import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {requestToken} from '../redux/reducer';
import {useAppDispatch} from '../hooks/global';
import {useInterval} from '../hooks/useInterval';

const Stack = createStackNavigator();

export default () => {
  const dispatch = useAppDispatch();

  useInterval(
    () => {
      // Your custom logic here
      dispatch(requestToken());

    },
    // Delay in milliseconds or null to stop it
    isPlaying ? delay : null,
  )
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{title: 'User'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
