import {createSlice} from '@reduxjs/toolkit';

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
});

const {actions, reducer: auth_reducers} = authSlice;
export const {setToken} = actions;
export default auth_reducers;
