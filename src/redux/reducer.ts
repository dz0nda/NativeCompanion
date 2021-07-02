import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {RootState} from './store';
import {UserInfos, UsersInfos} from './types';
import {getToken, getUsersFilter, getUserById} from './api';

export interface AppState {
  status: 'idle' | 'loading' | 'success' | 'failed';
  users: UsersInfos[];
  user: UserInfos;
}

const initialState: AppState = {
  status: 'idle',
  users: [],
  user: {},
};

export const searchUser = createAsyncThunk(
  'app/searchUser',
  async (login: string, {rejectWithValue}) => {
    return getToken().then(async token => {
      return getUsersFilter(login, token).then(users => {
        if (Array.isArray(users) && users.length === 1) {
          return getUserById(users[0].id, token).then(user => {
            return user;
          });
        }
        return rejectWithValue('Not found');
      });
    });
  },
);

export const counterSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(searchUser.rejected, state => {
        state.status = 'failed';
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.status = 'success';
        state.user = action.payload;
      });
  },
});

export const selectStatus = (state: RootState) => state.counter.status;
export const selectUser = (state: RootState) => state.counter.user;

export default counterSlice.reducer;
