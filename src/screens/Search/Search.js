//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import Seperator from '../../components/Seperator';

const Search = () => {
  return (
    <View style={styles.container}>
      <Seperator />
      <Text>Search</Text>
      <Seperator />
      <SearchBar />
    </View>
  );
};

export default Search;
