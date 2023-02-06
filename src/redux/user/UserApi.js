import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-support-webapp.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().auth;

      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['User'],

  endpoints: builder => ({
    updateUserInfo: builder.mutation({
      query: payload => ({
        url: `/update`,
        method: 'PUT',
        body: payload,
      }),
      providesTags: ['User'],
    }),
  }),
});
export const { useGetCurrentUserQuery, useUpdateUserInfoMutation } = userApi;
