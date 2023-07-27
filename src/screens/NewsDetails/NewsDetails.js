import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton';
import CustomWebView from '../../components/CustomWebView';

const NewsDetails = ({navigation, route}) => {
  const url = route.params.url;
  const title = route.params.title;

  const text = title.length <= 30 ? title : title.substring(0, 30) + '...';

  return (
    <View style={styles.container}>
      <BackButton title={text} onPress={() => navigation.goBack()} />
      <CustomWebView url={url} />
    </View>
  );
};

export default NewsDetails;
