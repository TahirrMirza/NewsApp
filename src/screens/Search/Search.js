import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import Seperator from '../../components/Seperator';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getSearchResults} from '../../redux/features/newsSlice';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import NewsTile from '../../components/NewsTile';

const Search = ({navigation}) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const {searchResults, searchResultsFailed, loading} = useSelector(
    state => state.news,
  );

  const searchNews = text => {
    dispatch(getSearchResults(text));
  };

  const renderItem = ({item}) => (
    <NewsTile
      navigation={navigation}
      title={item.title}
      imgUri={item.image}
      pageUrl={item.url}
    />
  );

  const Retry = () => {
    dispatch(getSearchResults());
  };

  return (
    <View style={styles.container}>
      <Header />
      <Seperator />
      <Text>Search</Text>
      <Seperator />
      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
        onEndEditing={text => searchNews(text.nativeEvent.text)}
      />
      {loading ? (
        <View style={styles.messageStyle}>
          <Loading />
        </View>
      ) : searchResultsFailed ? (
        <View style={styles.messageStyle}>
          <ErrorMessage text={searchResultsFailed} onPress={Retry} />
        </View>
      ) : searchResults.length !== 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.messageStyle}>
          <Text>No Results Found</Text>
        </View>
      )}
    </View>
  );
};

export default Search;
