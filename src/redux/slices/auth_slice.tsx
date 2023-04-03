import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  AuthSlice,
  loginStatusFulfilled,
  loginStatusRejected,
  registrationStatusFulfilled,
  registrationStatusRejected
} from 'redux/store';

export const AUTH_PATH = 'auth';

interface RegisterError {
  field: 'email' | 'password';
  reason: string;
}

interface RegsiterPayload {
  errors: RegisterError[];
}

interface LoginPayload {
  error: any;
}

export type RegisterResponse = PayloadAction<RegsiterPayload | undefined>;
export type LoginResponse = PayloadAction<LoginPayload | undefined>;

const initialState: AuthSlice = {
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registrationStatusFulfilled, () => {
      return { error: null };
    });
    builder.addCase(
      registrationStatusRejected,
      (state, { payload }: RegisterResponse) => {
        if (payload) {
          const { errors } = payload;

          if (
            errors.some(
              ({ field, reason }: { field: string; reason: string }) =>
                field === 'email' && reason === 'unique'
            )
          ) {
            return { error: 'An account with this email already exists' };
          } else {
            return { error: 'Invalid email or password' };
          }
        } else {
          return {
            error: 'Unknown error: Server did not respond to register request'
          };
        }
      }
    );
    builder.addCase(loginStatusFulfilled, () => {
      return { error: null };
    });
    builder.addCase(
      loginStatusRejected,
      (state, { payload }: LoginResponse) => {
        return payload
          ? payload.error
          : {
              error: 'Unknown error: Server did not response to login request'
            };
      }
    );
  }
});

const { reducer: auth_reducers } = authSlice;
export default auth_reducers;
