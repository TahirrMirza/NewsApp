import axios from 'axios';
import {Alert} from 'react-native';
import {SEARCH, TOP_HEADLINES} from '../utils/baseURL';
import {buildSearchParams} from '../utils/buildparams';
import {
  BREAKING_NEWS_RESULTS,
  INTERNATIONAL_NEWS_RESULTS,
  NATIONAL_NEWS_RESULTS,
  SEARCH_RESULTS,
} from './type';

export const getSearchResults = text => {
  return async dispatch => {
    try {
      const query = {
        q: text,
        lang: 'en',
        max: 50,
        in: 'title,description,content',
        sortby: 'publishedAt',
      };
      const config = {
        method: 'GET',
        url: SEARCH + buildSearchParams(query),
      };
      const results = await axios(config);
      dispatch({
        type: SEARCH_RESULTS,
        payload: results.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBreakingNews = () => {
  return async dispatch => {
    try {
      const query = {
        lang: 'en',
        max: 50,
        country: 'in',
      };
      const config = {
        method: 'GET',
        url: TOP_HEADLINES + buildSearchParams(query),
      };
      const results = await axios(config);
      dispatch({
        type: BREAKING_NEWS_RESULTS,
        payload: results.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getNationalNews = () => {
  return async dispatch => {
    try {
      const query = {
        category: 'nation',
        lang: 'en',
        max: 50,
        country: 'in',
      };
      const config = {
        method: 'GET',
        url: TOP_HEADLINES + buildSearchParams(query),
      };
      const results = await axios(config);
      dispatch({
        type: NATIONAL_NEWS_RESULTS,
        payload: results.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getInternationalNews = () => {
  return async dispatch => {
    try {
      const query = {
        category: 'world',
        lang: 'en',
        max: 50,
        country: 'gb',
      };
      const config = {
        method: 'GET',
        url: TOP_HEADLINES + buildSearchParams(query),
      };
      const results = await axios(config);
      dispatch({
        type: INTERNATIONAL_NEWS_RESULTS,
        payload: results.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
