import {createSelector} from '@reduxjs/toolkit';

interface State {
  auth: AuthSlice;
}

interface AuthSlice {
  error: string;
}

const useAuthError = createSelector(
  (state: State) => state.auth,
  (auth: AuthSlice) => auth.error
);

export default useAuthError;
