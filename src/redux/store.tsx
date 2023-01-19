import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import auth_reducers from './slices/auth_slice';

export const authPath = 'auth';

export const registrationStatusPath = `${authPath}/registrationStatus`;
export const registrationStatusPending = `${registrationStatusPath}/pending`;
export const registrationStatusFulfilled = `${registrationStatusPath}/fulfilled`;
export const registrationStatusRejected = `${registrationStatusPath}/rejected`;

export const loginStatusPath = `${authPath}/loginStatus`;
export const loginStatusPending = `${loginStatusPath}/pending`;
export const loginStatusFulfilled = `${loginStatusPath}/fulfilled`;
export const loginStatusRejected = `${loginStatusPath}/rejected`;

export const createLinkStatusPath = 'createLink';

export default configureStore({
  reducer: {
    [authPath]: auth_reducers,
  },
  middleware: [thunkMiddleware],
});
