import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import auth_reducers from './slices/auth_slice';

export const authPath = 'auth';

export default configureStore({
  reducer: {
    [authPath]: auth_reducers,
  },
  middleware: [thunkMiddleware],
});
