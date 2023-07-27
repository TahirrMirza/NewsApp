import React from 'react';
import {View} from 'react-native';

const Seperator = ({seperate}) => {
  return <View style={{marginVertical: seperate || 5}} />;
};

export default Seperator;
