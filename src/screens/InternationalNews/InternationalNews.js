import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import NewsTile from '../../components/NewsTile';

const InternationalNews = ({navigation}) => {
  const {internationalNewsResults} = useSelector(state => state.Reducer);

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
        data={internationalNewsResults}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default InternationalNews;
