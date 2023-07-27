import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Back from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../assets/colors';

const BackButton = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Back name="arrow-back" size={25} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.lightgray,
    backgroundColor: colors.white,
    gap: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default BackButton;
