import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SEARCH, TOP_HEADLINES} from '../../utils/baseURL';
import {buildSearchParams} from '../../utils/buildparams';
import NetInfo from '@react-native-community/netinfo';

const initialState = {
  searchResults: [],
  searchResultsFailed: '',
  breakingNewsResults: [],
  breakingNewsResultsFailed: '',
  nationalNewsResults: [],
  nationalNewsResultsFailed: '',
  internationalNewsResults: [],
  internationalNewsResultsFailed: '',
  loading: false,
};

export const getSearchResults = createAsyncThunk(
  'news/getSearchResults',
  async (text, {rejectWithValue}) => {
    try {
      const state = await NetInfo.fetch();
      if (state.isConnected) {
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
        return results.data.articles;
      } else {
        return rejectWithValue('Please check your internet connection');
      }
    } catch (error) {
      return rejectWithValue('Something Went Wrong!');
    }
  },
);

export const getBreakingNews = createAsyncThunk(
  'news/getBreakingNews',
  async (_, {rejectWithValue}) => {
    try {
      const state = await NetInfo.fetch();
      if (state.isConnected) {
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
        return results.data.articles;
      } else {
        return rejectWithValue('Please check your internet connection');
      }
    } catch (error) {
      return rejectWithValue('Something Went Wrong!');
    }
  },
);

export const getNationalNews = createAsyncThunk(
  'news/getNationalNews',
  async (_, {rejectWithValue}) => {
    try {
      const state = await NetInfo.fetch();
      if (state.isConnected) {
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
        return results.data.articles;
      } else {
        return rejectWithValue('Please check your internet connection');
      }
    } catch (error) {
      return rejectWithValue('Something Went Wrong!');
    }
  },
);

export const getInternationalNews = createAsyncThunk(
  'news/getInternationalNews',
  async (_, {rejectWithValue}) => {
    try {
      const state = await NetInfo.fetch();
      if (state.isConnected) {
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
        return results.data.articles;
      } else {
        return rejectWithValue('Please check your internet connection');
      }
    } catch (error) {
      return rejectWithValue('Something Went Wrong!');
    }
  },
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSearchResults.pending, state => {
        state.loading = true;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
        state.searchResultsFailed = null;
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.searchResultsFailed = action.payload;
      })
      .addCase(getBreakingNews.pending, state => {
        state.loading = true;
      })
      .addCase(getBreakingNews.fulfilled, (state, action) => {
        state.loading = false;
        state.breakingNewsResults = action.payload;
        state.breakingNewsResultsFailed = null;
      })
      .addCase(getBreakingNews.rejected, (state, action) => {
        state.loading = false;
        state.breakingNewsResultsFailed = action.payload;
      })
      .addCase(getNationalNews.pending, state => {
        state.loading = true;
      })
      .addCase(getNationalNews.fulfilled, (state, action) => {
        state.loading = false;
        state.nationalNewsResults = action.payload;
        state.nationalNewsResultsFailed = null;
      })
      .addCase(getNationalNews.rejected, (state, action) => {
        state.loading = false;
        state.nationalNewsResultsFailed = action.payload;
      })
      .addCase(getInternationalNews.pending, state => {
        state.loading = true;
      })
      .addCase(getInternationalNews.fulfilled, (state, action) => {
        state.loading = false;
        state.internationalNewsResults = action.payload;
        state.internationalNewsResultsFailed = null;
      })
      .addCase(getInternationalNews.rejected, (state, action) => {
        state.loading = false;
        state.internationalNewsResultsFailed = action.payload;
      });
  },
});

export default newsSlice.reducer;
