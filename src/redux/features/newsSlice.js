import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {SEARCH, TOP_HEADLINES} from '../../utils/baseURL';
import {buildSearchParams} from '../../utils/buildparams';

const initialState = {
  searchResults: [],
  breakingNewsResults: [],
  nationalNewsResults: [],
  internationalNewsResults: [],
};

export const getSearchResults = createAsyncThunk(
  'news/getSearchResults',
  async (text, {rejectWithValue}) => {
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
      return results.data.articles;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getBreakingNews = createAsyncThunk(
  'news/getBreakingNews',
  async (_, {rejectWithValue}) => {
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
      return results.data.articles;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getNationalNews = createAsyncThunk(
  'news/getNationalNews',
  async (_, {rejectWithValue}) => {
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
      return results.data.articles;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getInternationalNews = createAsyncThunk(
  'news/getInternationalNews',
  async (_, {rejectWithValue}) => {
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
      return results.data.articles;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(getSearchResults.rejected, (state, action) => {})
      .addCase(getBreakingNews.fulfilled, (state, action) => {
        state.breakingNewsResults = action.payload;
      })
      .addCase(getBreakingNews.rejected, (state, action) => {})
      .addCase(getNationalNews.fulfilled, (state, action) => {
        state.nationalNewsResults = action.payload;
      })
      .addCase(getNationalNews.rejected, (state, action) => {})
      .addCase(getInternationalNews.fulfilled, (state, action) => {
        state.internationalNewsResults = action.payload;
      })
      .addCase(getInternationalNews.rejected, (state, action) => {});
  },
});

export default newsSlice.reducer;
