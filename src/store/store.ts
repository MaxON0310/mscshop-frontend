import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { cartSlice } from './cart/cart.slice'

const persistConfig = {
	key: 'mscshop',
	storage,
	whiteList: ['cart']
}

const isClient = typeof window !== 'undefined'

const combinedReducers = combineReducers({
	cart: cartSlice.reducer
})

let mainReducer = combinedReducers

if (isClient) {
	const { persistReducer } = require('redux-persist')
	const storage = require('redux-persist/lib/storage')

	mainReducer = persistReducer(persistConfig, combinedReducers)
}

export const store = configureStore({
	reducer: mainReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>
