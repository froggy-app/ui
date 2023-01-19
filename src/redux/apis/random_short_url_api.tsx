import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const randomShortUrlAPI = createApi({
  reducerPath: 'links',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/random-short-url',
  }),
  endpoints: (builder) => ({
    list: builder.query<any, void>({
      query: () => '/list',
    }),
  }),
});

export const {useListQuery} = randomShortUrlAPI;
