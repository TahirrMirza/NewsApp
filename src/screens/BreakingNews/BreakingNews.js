import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import NewsTile from '../../components/NewsTile';
import ErrorMessage from '../../components/ErrorMessage';
import {getBreakingNews} from '../../redux/features/newsSlice';
import Loading from '../../components/Loading';

const BreakingNews = ({navigation}) => {
  const dispatch = useDispatch();
  const {breakingNewsResults, breakingNewsResultsFailed, loading} = useSelector(
    state => state.news,
  );

  const Retry = () => {
    dispatch(getBreakingNews());
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
      ) : breakingNewsResultsFailed ? (
        <ErrorMessage text={breakingNewsResultsFailed} onPress={Retry} />
      ) : (
        <FlatList
          data={breakingNewsResults}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default BreakingNews;
