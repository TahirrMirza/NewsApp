//import navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HOME, SEARCH, VIDEO} from '../routes/routes';
import {colors} from '../../assets/colors';
import TopTabStack from './TopTabStack';
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Video from '../../screens/Video/Video';
import Search from '../../screens/Search/Search';
import {StyleSheet} from 'react-native';

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
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({focused}) => (
            <HomeIcon name={focused ? 'home' : 'home-outline'} size={25} />
          ),
        }}
        name={HOME}
        component={TopTabStack}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({focused}) => (
            <VideoIcon name={focused ? 'play' : 'playcircleo'} size={25} />
          ),
        }}
        name={VIDEO}
        component={Video}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({focused}) => <FeatherIcon name="search" size={25} />,
        }}
        name={SEARCH}
        component={Search}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    color: colors.black,
    bottom: 10,
  },
});

export default BottomTabStack;
