import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOKEN_KEY} from 'components/routing/AuthGateway';
import {registerAccountAPI} from 'redux/apis/auth_apis';
import {registrationStatusPath} from 'redux/store';

const registerAccount: any = createAsyncThunk(
  registrationStatusPath,
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue, fulfillWithValue}
  ) =>
    await registerAccountAPI({email, password}).then((response: any) => {
      if (response.errors) {
        return rejectWithValue(response);
      } else {
        const {data} = response;
        const {expire} = data;

        localStorage.setItem(TOKEN_KEY, expire);
        return fulfillWithValue(response);
      }
    })
);

export default registerAccount;
