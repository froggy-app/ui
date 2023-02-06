import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOKEN_KEY} from 'components/routing/AuthGateway';
import {loginAPI} from 'redux/apis/auth_apis';
import {loginStatusPath} from 'redux/store';

const loginUser: any = createAsyncThunk(
  loginStatusPath,
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue, fulfillWithValue}
  ) =>
    await loginAPI({email, password}).then((response: any) => {
      if (response.error) {
        return rejectWithValue(response);
      } else {
        const {data} = response;
        const {expire} = data;

        localStorage.setItem(TOKEN_KEY, expire);
        return fulfillWithValue(data);
      }
    })
);

export default loginUser;
