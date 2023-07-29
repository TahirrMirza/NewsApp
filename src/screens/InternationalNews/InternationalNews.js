import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import NewsTile from '../../components/NewsTile';
import ErrorMessage from '../../components/ErrorMessage';
import {getInternationalNews} from '../../redux/features/newsSlice';
import Loading from '../../components/Loading';

const InternationalNews = ({navigation}) => {
  const {internationalNewsResults, internationalNewsResultsFailed, loading} =
    useSelector(state => state.news);
  const dispatch = useDispatch();

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
        <ErrorMessage onPress={Retry} text={internationalNewsResultsFailed} />
      ) : internationalNewsResults ? (
        <FlatList
          data={internationalNewsResults}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text>No Results Found</Text>
      )}
    </View>
  );
};

export default InternationalNews;
