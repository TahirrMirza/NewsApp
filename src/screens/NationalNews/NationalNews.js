import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import NewsTile from '../../components/NewsTile';

const NationalNews = ({navigation}) => {
  const {nationalNewsResults} = useSelector(state => state.Reducer);

  const renderItem = ({item}) => (
    <NewsTile
      navigation={navigation}
      title={item.title}
      imgUri={item.image}
      pageUrl={item.url}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={nationalNewsResults}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NationalNews;
