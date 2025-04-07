import {configureStore , combineReducers} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer , persistStore } from 'redux-persist'
import formReducer from '../Slicer/FormSlicer'

const persistConfig = {
    key : 'root',
     storage,
}

const rootReducer = combineReducers({
    form:formReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store)