import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  BREAKING_NEWS,
  INTERNATIONAL_NEWS,
  NATIONAL_NEWS,
} from '../routes/routes';
import BreakingNews from '../../screens/BreakingNews/BreakingNews';
import NationalNews from '../../screens/NationalNews/NationalNews';
import InterNationalNews from '../../screens/InternationalNews/InternationalNews';
import Header from '../../components/Header';
import {colors} from '../../assets/colors';

const Tab = createMaterialTopTabNavigator();

export default TopTabStack = () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {},
          tabBarIndicatorStyle: {
            backgroundColor: colors.black,
            height: 3,
          },
        }}
        initialRouteName={BREAKING_NEWS}>
        <Tab.Screen
          options={{
            title: 'Breaking News',
          }}
          name={BREAKING_NEWS}
          component={BreakingNews}
        />
        <Tab.Screen
          options={{
            title: 'National News',
          }}
          name={NATIONAL_NEWS}
          component={NationalNews}
        />
        <Tab.Screen
          options={{
            title: 'International News',
          }}
          name={INTERNATIONAL_NEWS}
          component={InterNationalNews}
        />
      </Tab.Navigator>
    </>
  );
};
