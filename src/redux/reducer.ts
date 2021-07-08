import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {RootState} from './store';
import {UserInfos, UsersInfos, StatusProps} from './types';
import {getToken, getUsersFilter, getUserById, checkToken} from './api';

import {mockUser} from './mock';

export interface Auth {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
  created_at?: number;
}

export interface AppState {
  status: StatusProps;
  message: string | undefined;
  auth: Auth;
  token: string;
  users: UserInfos[];
  user: UserInfos;
}

const initialState: AppState = {
  status: 'idle',
  message: '',
  token: '',
  auth: {},
  users: [],
  user: mockUser,
};

export const requestToken = createAsyncThunk(
  'app/requestToken',
  async (_, {}) => {
    try {
      const token = await getToken();
      console.log(token);
      return token;
    } catch (err) {
      throw err;
    }
  },
);

export const searchUser = createAsyncThunk(
  'app/searchUser',
  async (login: string, {getState, dispatch}) => {
    const state = getState() as RootState;
    const token = state.app.auth.access_token;
    try {
      const users = await getUsersFilter(login, token);
      const user = await getUserById(users[0].id, token);
      return [user];
    } catch (err) {
      checkToken(token).catch(async _ => {
        await dispatch(requestToken());
        return await dispatch(searchUser(login));
      });
      throw err;
    }
  },
);

// export const searchUser = createAsyncThunk(
//   'app/searchUser',
//   async (login: string, {dispatch, getState, rejectWithValue}) => {
//     const state = getState() as RootState;

//     // await checkToken();
//     return getToken().then(async token => {
//       return getUsersFilter(login, token).then(users => {
//         if (Array.isArray(users) && users.length === 1) {
//           return getUserById(users[0].id, token).then(user => {
//             return user;
//           });
//         }
//         return rejectWithValue('Not found');
//       });
//     });
//   },
// );

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(requestToken.fulfilled, (state, action) => {
        // state.status = 'success';
        state.auth = action.payload;
      })
      .addCase(searchUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.users = [];
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.status = 'success';
        state.users = action.payload;
        state.user = action.payload[0];
      });
  },
});

export const selectStatus = (state: RootState) => state.app.status;
export const selectUsers = (state: RootState) => state.app.users;
export const selectUser = (state: RootState) => state.app.user;
export const selectAuth = (state: RootState) => state.app.auth;

export default appSlice.reducer;
