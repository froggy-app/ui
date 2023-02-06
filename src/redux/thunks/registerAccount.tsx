import {createAsyncThunk} from '@reduxjs/toolkit';
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
        console.log(response);
        const {data} = response;
        const {expire} = data;

        localStorage.setItem('tokenExpire', expire);
        return fulfillWithValue(response);
      }
    })
);

export default registerAccount;
