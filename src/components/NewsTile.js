import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {colors} from '../assets/colors';
import FastImage from 'react-native-fast-image';
import {Images} from '../assets/images/Images';
import {NEWS_DETAILS} from '../navigation/routes/routes';

const NewsTile = ({imgUri, pageUrl, title, navigation}) => {
  const openUrl = () => {
    navigation.navigate(NEWS_DETAILS, {url: pageUrl, title});
  };
  return (
    <TouchableOpacity onPress={openUrl} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>
          {title.length <= 105 ? title : title.substring(0, 105) + '...'}
        </Text>
      </View>
      <FastImage
        source={
          imgUri
            ? {
                uri: imgUri,
              }
            : Images.Placeholder
        }
        style={styles.imgStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.lightgray,
    gap: 10,
  },
  textContainer: {
    width: '65%',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  imgStyle: {
    height: 80,
    width: '30%',
    borderRadius: 10,
  },
});

export default NewsTile;
