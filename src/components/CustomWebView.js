import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const CustomWebView = ({url}) => {
  return <WebView style={styles.container} source={{uri: url}} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomWebView;
