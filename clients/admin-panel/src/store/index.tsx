import modalSlice from './features/modalSlice'
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    modalState: modalSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
