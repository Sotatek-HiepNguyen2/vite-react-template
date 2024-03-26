import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '@/store'

/**
 * Use this hook instead of plain `useDispatch`
 */
export const useAppDispatch: () => AppDispatch = useDispatch

/**
 * Use this hook instead of plain `useSelector`
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
