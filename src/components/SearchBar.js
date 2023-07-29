import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colors} from '../assets/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SearchBar = ({onEndEditing, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <FeatherIcon name="search" size={20} />
      <TextInput
        onEndEditing={onEndEditing}
        returnKeyType="done"
        style={styles.input}
        value={value}
        placeholder="Search"
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: colors.lightgray,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: 40,
  },
  input: {
    width: '90%',
  },
});

export default SearchBar;
