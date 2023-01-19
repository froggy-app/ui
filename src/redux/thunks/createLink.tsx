import {createAsyncThunk} from '@reduxjs/toolkit';
import {createLinkAPI} from 'redux/apis/create_link_api';
import {createLinkStatusPath} from 'redux/store';

const createLink: any = createAsyncThunk(
  createLinkStatusPath,
  async ({url}: {url: string}) =>
    await createLinkAPI({url}).then((response: any) => {
      return response;
    })
);

export default createLink;
