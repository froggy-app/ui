import {createSlice} from '@reduxjs/toolkit';
import {
  loginStatusFulfilled,
  loginStatusRejected,
  registrationStatusFulfilled,
  registrationStatusRejected,
} from 'redux/store';

export const AUTH_PATH = 'auth';

const initialState = {
  token: null,
  error: null,
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
        return {token, error: null};
      }
    );
    builder.addCase(
      registrationStatusRejected,
      ({token}, {payload: {error}}: any) => {
        return {token, error};
      }
    );
    builder.addCase(loginStatusFulfilled, (state, {payload: {token}}: any) => {
      return {token, error: null};
    });
    builder.addCase(loginStatusRejected, ({token}, {payload: {error}}: any) => {
      return {token, error};
    });
  },
});

const {actions, reducer: auth_reducers} = authSlice;
export const {setToken} = actions;
export default auth_reducers;
