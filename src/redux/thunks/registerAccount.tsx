import {createAsyncThunk} from '@reduxjs/toolkit';
import {registerAccountAPI} from 'redux/apis/auth_apis';
import {authPath} from 'redux/store';

export const registrationStatusPath = `${authPath}/registrationStatus`;

const registerAccount: any = createAsyncThunk(
  registrationStatusPath,
  async ({email, password}: {email: string; password: string}) =>
    await registerAccountAPI({email, password}).then((response) => {
      console.log(response);
    })
);

export default registerAccount;
