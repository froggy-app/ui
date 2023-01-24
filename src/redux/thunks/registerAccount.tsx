import {createAsyncThunk} from '@reduxjs/toolkit';
import {registerAccountAPI} from 'redux/apis/auth_apis';
import {registrationStatusPath} from 'redux/store';

const registerAccount: any = createAsyncThunk(
  registrationStatusPath,
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue, fulfillWithValue}
  ) =>
    await registerAccountAPI({email, password}).then((response: any) =>
      response.errors ? rejectWithValue(response) : fulfillWithValue(response)
    )
);

export default registerAccount;
