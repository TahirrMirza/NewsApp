import {
  BREAKING_NEWS_RESULTS,
  INTERNATIONAL_NEWS_RESULTS,
  NATIONAL_NEWS_RESULTS,
  SEARCH_RESULTS,
} from './type';

const initialState = {
  searchResults: [],
  breakingNewsResults: [],
  nationalNewsResults: [],
  internationalNewsResults: [],
};
function Reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {...state, searchResults: action.payload};
    case BREAKING_NEWS_RESULTS:
      return {...state, breakingNewsResults: action.payload};
    case NATIONAL_NEWS_RESULTS:
      return {...state, nationalNewsResults: action.payload};
    case INTERNATIONAL_NEWS_RESULTS:
      return {...state, internationalNewsResults: action.payload};
    default:
      return state;
  }
}
export default Reducer;
