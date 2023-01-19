import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const randomShortUrlAPI = createApi({
  reducerPath: 'links',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/random-short-url',
  }),
  tagTypes: ['List'],
  endpoints: (builder) => ({
    listLinks: builder.query<any, void>({
      query: () => '/list',
      providesTags: ['List'],
    }),
    createLink: builder.mutation({
      query: (body) => ({
        url: '/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['List'],
    }),
  }),
});

export const {useListLinksQuery, useCreateLinkMutation} = randomShortUrlAPI;
