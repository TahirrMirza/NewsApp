import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../assets/colors';

const ErrorMessage = ({onPress, text}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: colors.black,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  text: {
    color: colors.white,
  },
});

export default ErrorMessage;
