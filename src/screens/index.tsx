import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Home';
import UserScreen from './User';

const Stack = createStackNavigator();

export default () => (
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
