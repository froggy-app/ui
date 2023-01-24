import {createSelector} from '@reduxjs/toolkit';
import {AuthSlice, ReduxStore} from 'redux/store';

const selectAuthError = createSelector(
  (state: ReduxStore) => state.auth,
  (auth: AuthSlice) => auth.error
);

export default selectAuthError;
