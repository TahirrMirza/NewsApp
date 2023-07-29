import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Images} from '../assets/images/Images';
import {colors} from '../assets/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.imageStyles}
        source={Images.AppLogo}
      />
      <Icon name="setting" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '6%',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 20,
    alignItems: 'center',
  },
  imageStyles: {
    height: 40,
    width: 60,
  },
});

export default Header;
