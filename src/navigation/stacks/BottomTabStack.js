//import navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HOME, SEARCH, VIDEO} from '../routes/routes';
import {colors} from '../../assets/colors';
import TopTabStack from './TopTabStack';
import HomeIcon from 'react-native-vector-icons/Entypo';
import VideoIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Video from '../../screens/Video/Video';
import Search from '../../screens/Search/Search';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flex: 0.09,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            color: colors.black,
            bottom: 10,
          },
          tabBarIcon: () => <HomeIcon name="home" size={20} />,
        }}
        name={HOME}
        component={TopTabStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Video',
          tabBarLabelStyle: {
            color: colors.black,
            bottom: 10,
          },
          tabBarIcon: () => <VideoIcon name="playcircleo" size={20} />,
        }}
        name={VIDEO}
        component={Video}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: {
            color: colors.black,
            bottom: 10,
          },
          tabBarIcon: () => <FeatherIcon name="search" size={20} />,
        }}
        name={SEARCH}
        component={Search}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
