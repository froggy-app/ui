import {createSlice} from '@reduxjs/toolkit';
import {registrationStatusFulfilled} from 'redux/store';

export const AUTH_PATH = 'auth';

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (action, {payload: {token}}) => {
      return token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      registrationStatusFulfilled,
      (state, {payload: {token}}: any) => {
        return {token};
      }
    );
  },
});

const {actions, reducer: auth_reducers} = authSlice;
export const {setToken} = actions;
export default auth_reducers;
