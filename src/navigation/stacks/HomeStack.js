import React, {useEffect} from 'react';

//import navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BOTTOM_TABS, HOME, NEWS_DETAILS, TOP_TABS} from '../routes/routes';
import BottomTabStack from './BottomTabStack';
import {useDispatch} from 'react-redux';
import {
  getBreakingNews,
  getInternationalNews,
  getNationalNews,
} from '../../redux/actions';
import NewsDetails from '../../screens/NewsDetails/NewsDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreakingNews());
    dispatch(getNationalNews());
    dispatch(getInternationalNews());
  }, []);
  return (
    <Stack.Navigator
      initialRouteName={BOTTOM_TABS}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={BOTTOM_TABS} component={BottomTabStack} />
      <Stack.Screen name={NEWS_DETAILS} component={NewsDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
