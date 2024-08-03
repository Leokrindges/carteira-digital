import { useDispatch, useSelector } from 'react-redux'
import type { AccountBalance, AppDispatch } from '.'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AccountBalance>()