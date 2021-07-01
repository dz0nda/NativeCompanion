import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CHANGE_BY_AMOUNT = 'CHANGE_BY_AMOUNT';

const GET_USERS = 'GET_USERS';

export const getUsers = () => ({
  type: GET_USERS,
  payload: [
    {
      created_at: '2021-06-28T12:47:17.321Z',
      id: 92021,
      login: 'oghma',
      updated_at: '2021-07-01T15:32:41.267Z',
      url: 'https://api.intra.42.fr/v2/users/oghma',
    },
  ],
});

export const incrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const changeByAmount = val => ({
  type: CHANGE_BY_AMOUNT,
  payload: val,
});
