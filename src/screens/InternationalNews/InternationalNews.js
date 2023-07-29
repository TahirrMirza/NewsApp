import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import NewsTile from '../../components/NewsTile';
import ErrorMessage from '../../components/ErrorMessage';
import {getInternationalNews} from '../../redux/features/newsSlice';
import Loading from '../../components/Loading';

const InternationalNews = ({navigation}) => {
  const {internationalNewsResults, internationalNewsResultsFailed, loading} =
    useSelector(state => state.news);

  const Retry = () => {
    dispatch(getInternationalNews());
  };

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
      {loading ? (
        <Loading />
      ) : internationalNewsResultsFailed ? (
        <ErrorMessage text={internationalNewsResultsFailed} />
      ) : (
        <FlatList
          data={internationalNewsResults}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default InternationalNews;
