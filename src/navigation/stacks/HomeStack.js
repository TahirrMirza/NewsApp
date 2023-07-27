import React from 'react';

//import navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, TOP_TABS} from '../routes/routes';
import TopTabStack from './TopTabStack';
import BottomTabStack from './BottomTabStack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME} component={BottomTabStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;
