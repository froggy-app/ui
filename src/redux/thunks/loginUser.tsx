import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginAPI} from 'redux/apis/auth_apis';
import {loginStatusPath} from 'redux/store';

const loginUser: any = createAsyncThunk(
  loginStatusPath,
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue, fulfillWithValue}
  ) =>
    await loginAPI({email, password}).then((response: any) => {
      return response.error
        ? rejectWithValue(response)
        : fulfillWithValue(response.data);
    })
);

export default loginUser;
