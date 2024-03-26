import { configureStore } from '@reduxjs/toolkit'
import { queryMiddleWare, queryReducer, queryReducerPath } from './queries'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authReducer } from '@/modules/auth/auth-slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [queryReducerPath]: queryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(queryMiddleWare),
})

// required for rtk-query refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
