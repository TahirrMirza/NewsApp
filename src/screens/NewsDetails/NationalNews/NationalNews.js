import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import NewsTile from '../../../components/NewsTile';
import ErrorMessage from '../../../components/ErrorMessage';
import {getNationalNews} from '../../../redux/features/newsSlice';
import Loading from '../../../components/Loading';

const NationalNews = ({navigation}) => {
  const {nationalNewsResults, nationalNewsResultsFailed, loading} = useSelector(
    state => state.news,
  );
  const dispatch = useDispatch();

  const Retry = () => {
    dispatch(getNationalNews());
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
      ) : nationalNewsResultsFailed ? (
        <ErrorMessage text={nationalNewsResultsFailed} onPress={Retry} />
      ) : nationalNewsResults ? (
        <FlatList
          data={nationalNewsResults}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text>No Results Found</Text>
      )}
    </View>
  );
};

export default NationalNews;
