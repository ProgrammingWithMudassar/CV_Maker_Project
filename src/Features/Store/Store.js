import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../Counter/CounterSlice.js'
import storage from 'redux-persist/es/storage'
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';


//First
const PersistConfig = {
    key: 'Data',
    version: 1,
    storage,
}

//Second
const rootReducer = combineReducers(counterSlice)

const PersistedReducer = persistReducer(PersistConfig, rootReducer)

const store = configureStore({
    reducer: {
        PersistedReducer: PersistedReducer,
    },

    //   middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(pokemonApi.middleware),
})

// setupListeners(store.dispatch)


export default store;