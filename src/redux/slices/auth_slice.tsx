import {createSlice} from '@reduxjs/toolkit';
import {
  AuthSlice,
  loginStatusFulfilled,
  loginStatusRejected,
  registrationStatusFulfilled,
  registrationStatusRejected,
} from 'redux/store';

export const AUTH_PATH = 'auth';

const initialState: AuthSlice = {
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registrationStatusFulfilled, () => {
      return {error: null};
    });
    builder.addCase(
      registrationStatusRejected,
      (state, {payload: {errors}}: any) => {
        if (
          errors.some(
            ({field, reason}: {field: string; reason: string}) =>
              field === 'email' && reason === 'unique'
          )
        ) {
          return {error: 'An account with this email already exists'};
        } else {
          return {error: 'Invalid credentials'};
        }
      }
    );
    builder.addCase(loginStatusFulfilled, () => {
      return {error: null};
    });
    builder.addCase(loginStatusRejected, (state, {payload: {error}}: any) => {
      return {error};
    });
  },
});

const {reducer: auth_reducers} = authSlice;
export default auth_reducers;
