import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'process.env.VITE_API_BASE_URL' }),
  endpoints: () => ({}),
})

export const {
  middleware: queryMiddleWare,
  reducerPath: queryReducerPath,
  reducer: queryReducer,
} = api
